if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-1a408907"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"eaba3e1551362a85e149f68ff88d339b"},{url:"android-chrome-512x512.png",revision:"ef938f98f8c04d8ded6a72d69e24032e"},{url:"apple-touch-icon.png",revision:"563ec074dd58f05d8de311bb7806bf98"},{url:"assets/350ecead1771c7ea.svg",revision:"6c574a6eb3f8019f22ca1f3ef2e68055"},{url:"assets/f43bc64363565d92.svg",revision:"7dabdd7afef23b7b6fcd5c7465ef443b"},{url:"favicon-16x16.png",revision:"c867f2afe1ada4ca5a5d2528d20d6d2a"},{url:"favicon-32x32.png",revision:"a9d13e4836d42787ef09d06e3d7e612c"},{url:"favicon.ico",revision:"282fabebca7e6ea6cd7367c8205b4373"},{url:"index.html",revision:"b6be05cb5de6c754378047d26515f509"},{url:"nfs.webmanifest",revision:"3bd41d813b4c73a1006fd441c0f76aaa"},{url:"robots.txt",revision:"6d4c4002d879604fdbbc4f4f18397fd8"},{url:"scripts/index.fd2ce0e5.js",revision:"2a9fe4b9dcf90282bdf4a6cfd9372f5f"},{url:"scripts/polyfills.0bf85bb6.js",revision:"379640cbfb1e95e8498ada688750ebe6"},{url:"scripts/vendors~index.2.72d2c8fe.js",revision:"523a1ef6e6284b5c8560cb9a6da59223"},{url:"scripts/vendors~polyfills.3.6c01cfc6.js",revision:"235b38ad4d9a045cea4a4881fb916a62"},{url:"scripts/vendors~webCompPolyfills.4.e83b48b5.js",revision:"84d0753f9b88582084d3f228e8c09abf"},{url:"scripts/vendors~webCompPolyfills.4.e83b48b5.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"scripts/webCompPolyfills.8ed48dc7.js",revision:"6853c126d5b628072d5b6ce12c05cc0f"},{url:"styles/index.0f8d5052.css",revision:"033137c2af740bb75e3291c19b16eb85"}],{}),e.registerRoute(/https:\/\/newsapi.ruppy.io/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map