import axios from "axios"
import { load } from "cheerio"
import { Download } from "../types"
import { OtakUtil } from "../util"

export const getDownloads = async (
   requestUrl: string,
   url: string
): Promise < Download[] > => {
   if (!OtakUtil.validateDownloadUrl(url)) return []
   const { data } = await axios.get(new URL(url, requestUrl).toString())
   const $ = load(data)
   if (!$("title").text().trim().match(/otaku/gi)) return []
   const downloads: Download[] = $(url.match(/batch/gi) ? ".batchlink > ul > li" : "#venkonten > .venser > .venutama > .download > ul > li").map((_, el) => {
      const resolution = $(el).find("strong").text().trim()
      const links = $(el).find("a").map((_, el2) => ({
         name: $(el2).text().trim(),
         url: $(el2).attr("href") as string,
      })).toArray()
      return {
         resolution: `${resolution}`,
         links,
      }
   }).toArray()
   if (url.match(/lengkap/gi) && new Set(downloads.map(d => d.resolution)).size !== downloads.length) {
      $("#venkonten > .download > h4").each((index, element) => {
         if (downloads[index]) {
            downloads[index]["title"] = $(element).text().trim()
         }
      })
   }
   return downloads
}
