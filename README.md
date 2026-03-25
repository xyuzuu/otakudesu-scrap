![otakudesu-scrape](https://socialify.git.ci/xyuzuu/otakudesu-scrap/image?description=1&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

# Installation

> npm i otakudes@github:xyuzuu/otakudesu-scrap

or

> yarn add otakudes@github:xyuzuu/otakudesu-scrap

## Quick Start
Basically, it is very simple to use.

If you use ES Module/TypeScript. Just type:

```ts
import { OtakudesuInstance } from 'otakudesu-scraper';
const otaku = new OtakudesuInstance();

await otaku.getAnime('tensei shitara') // for search result
.then(v => v[0].extra()) // for detail anime
```

And, if you use CommonJS. Just follow the codes above, and change `import { OtakudesuInstance } from 'otakudesu-scraper';` to `const { OtakudesuInstance } = require('otakudesu-scraper');`

## Documentation
Need documentation? [Check this out!](https://hansputera.github.io/otakudesu-scrape)

## Contribution, and issues
Contributions are welcome, and if you have any issues with this package, you are welcome to open the issue on the [github repository](https://github.com/hansputera/otakudesu-scrape/issues).

