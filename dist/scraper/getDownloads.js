"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownloads = void 0;
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
const getDownloads = (url) => __awaiter(void 0, void 0, void 0, function*() {
   const { data } = yield(0, axios_1.default).get(url);
   const $ = (0, cheerio_1.load)(data);
   const urls = {};
   $("div.download > ul > li").each((i, e) => {
      const resolution = $(e).find("strong").text().trim();
      $(e).find("a").each((_i, _e) => {
         urls[resolution] = urls[resolution] ? urls[resolution] : [];
         urls[resolution].push({
            name: $(_e).text().trim(),
            url: $(_e).attr("href"),
         });
      });
   });
   const result = Object.keys(urls).map(res => ({
      resolution: `${res}`,
      links: urls[res]
   }));
   return result;
});
exports.getDownloads = getDownloads;
