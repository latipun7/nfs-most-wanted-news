if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,d)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=d(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-b098ada2"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"eaba3e1551362a85e149f68ff88d339b"},{url:"/android-chrome-512x512.png",revision:"ef938f98f8c04d8ded6a72d69e24032e"},{url:"/apple-touch-icon.png",revision:"563ec074dd58f05d8de311bb7806bf98"},{url:"/assets/350ecead1771c7ea.svg",revision:"6c574a6eb3f8019f22ca1f3ef2e68055"},{url:"/assets/f43bc64363565d92.svg",revision:"7dabdd7afef23b7b6fcd5c7465ef443b"},{url:"/favicon-16x16.png",revision:"c867f2afe1ada4ca5a5d2528d20d6d2a"},{url:"/favicon-32x32.png",revision:"a9d13e4836d42787ef09d06e3d7e612c"},{url:"/favicon.ico",revision:"282fabebca7e6ea6cd7367c8205b4373"},{url:"/index.html",revision:"89ce74bad75eab3dd782c66d43b44783"},{url:"/nfs.webmanifest",revision:"daebf47ddcfb068833fc746eabee358b"},{url:"/robots.txt",revision:"6d4c4002d879604fdbbc4f4f18397fd8"},{url:"/scripts/index.77596883.js",revision:"883713a4ef59a0da8de958cb7b347ff0"},{url:"/scripts/polyfills.1486fb9c.js",revision:"28bb9ff904859ca0731ed72d18ce7921"},{url:"/scripts/vendors~index.2.ef6ad571.js",revision:"d94d6a4cc0028e404d163d0734d5d987"},{url:"/scripts/vendors~polyfills.3.eed9b5df.js",revision:"3adde976e78d79572359bf8d125f9163"},{url:"/scripts/vendors~webCompPolyfills.4.3e29c4a8.js",revision:"f189cb7c49edc9f12fc48eec490bb59c"},{url:"/scripts/vendors~webCompPolyfills.4.3e29c4a8.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/scripts/webCompPolyfills.e9d62864.js",revision:"5b1d70ff712e0ffee18a051c4be18de5"},{url:"/styles/index.1bc73caf.css",revision:"d983e1e73cfbae2313f1b9b0f56715e7"}],{}),e.registerRoute(/https:\/\/newsapi.org/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
