/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "29ba489f07506738197725f63a6a0fbd"
  },
  {
    "url": "about/contact.html",
    "revision": "f0171b26ea80c36d6a328678472427e1"
  },
  {
    "url": "about/contributing.html",
    "revision": "17359150cc74964edaf71cbe76cbb4b1"
  },
  {
    "url": "about/introduction.html",
    "revision": "5e928a2fdda94f0d7578fd95c07a1676"
  },
  {
    "url": "about/license.html",
    "revision": "9db651cef631693b2f7f7f2825262781"
  },
  {
    "url": "about/roadmap.html",
    "revision": "0c44be37d5c3deb0b4e06bb09598f2dc"
  },
  {
    "url": "assets/css/0.styles.25ffafa9.css",
    "revision": "37cec3f2dcbc0ee8758cd12d536e4751"
  },
  {
    "url": "assets/img/etl.5c60286b.jpg",
    "revision": "5c60286bd6cad27887fd58e021dcc77d"
  },
  {
    "url": "assets/img/krawler-overview.29a3f099.png",
    "revision": "29a3f099a7aeecee4fa4f9061a449335"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85926714.js",
    "revision": "0db9f8ef70dedafe7fee60141c396b0b"
  },
  {
    "url": "assets/js/11.a81db617.js",
    "revision": "920c47eda10bb9a4ca40698ca9c9bd78"
  },
  {
    "url": "assets/js/12.97d5e5c8.js",
    "revision": "52cb4d4b0ecf3fe059cd3ae623acc25b"
  },
  {
    "url": "assets/js/13.6d4d1414.js",
    "revision": "37eaf0e235ea1193ad428a1bca7d8a5f"
  },
  {
    "url": "assets/js/14.2a241faf.js",
    "revision": "75b0860a22662d9fbd98a4f05072a680"
  },
  {
    "url": "assets/js/15.cfafa784.js",
    "revision": "2ad2c4bf265a869446f4cdc91e69ebd1"
  },
  {
    "url": "assets/js/16.ffa5d390.js",
    "revision": "bb7b5908d1a09c3a0d784f021f82130e"
  },
  {
    "url": "assets/js/17.68a49618.js",
    "revision": "5eb771fd9487c7f79208ba2c9af22800"
  },
  {
    "url": "assets/js/18.c480d4c8.js",
    "revision": "c10adc9916fd1d643145dc4af9ba78ca"
  },
  {
    "url": "assets/js/19.f4f5bcb6.js",
    "revision": "6056a8d906f9ae2c48ea3585d8c9f46d"
  },
  {
    "url": "assets/js/2.474da0f0.js",
    "revision": "6abdf1ca338d1f8ef94bbe1b6f3d0751"
  },
  {
    "url": "assets/js/20.4e88aa1e.js",
    "revision": "1864039376d0913b5c2e435e9b9f4173"
  },
  {
    "url": "assets/js/21.31348589.js",
    "revision": "58431d6d49711df2ea251c0a1565c45f"
  },
  {
    "url": "assets/js/22.7d77138c.js",
    "revision": "bf0ae2d552dfc0bf5c54783d2286367f"
  },
  {
    "url": "assets/js/23.7c355498.js",
    "revision": "1632de08352e75f656e6cca28aa3063b"
  },
  {
    "url": "assets/js/24.d8b242c9.js",
    "revision": "65197b1152534cc2150b4de7e176aac7"
  },
  {
    "url": "assets/js/3.dfa3e8be.js",
    "revision": "c849b801d1bd213b66f1922757960db1"
  },
  {
    "url": "assets/js/4.454cdf86.js",
    "revision": "10fd3a93dd3ea99014c5d5a912c6083d"
  },
  {
    "url": "assets/js/5.0faea6a2.js",
    "revision": "bad352099e449374fc8be4e4854cb5c0"
  },
  {
    "url": "assets/js/6.9558c952.js",
    "revision": "11253de8399e7f6820eb377f728fd114"
  },
  {
    "url": "assets/js/7.3658d3f9.js",
    "revision": "d909dd69c78fb97061ae562b83c43949"
  },
  {
    "url": "assets/js/8.b6ecc4d1.js",
    "revision": "00b08c9b2ec8c549e2aecf3a46c5b492"
  },
  {
    "url": "assets/js/9.d214e9fa.js",
    "revision": "0c4fb0767085652c399adc7084c0bd4a"
  },
  {
    "url": "assets/js/app.6bbddac2.js",
    "revision": "1250a67acfe90d45b343f9138422c6d2"
  },
  {
    "url": "examples/index.html",
    "revision": "5c4c5038788c3bccdd88f5a456ee966b"
  },
  {
    "url": "guides/extending-krawler.html",
    "revision": "b50ac09c0a0ad5933d55753f56c64204"
  },
  {
    "url": "guides/index.html",
    "revision": "9288918b786242062c67adf8ba981f55"
  },
  {
    "url": "guides/installing-krawler.html",
    "revision": "37c06baebe66953903ce6fe3222e7e3a"
  },
  {
    "url": "guides/understanding-krawler.html",
    "revision": "b94faad2a07e3cd5e3003a94c3e6be57"
  },
  {
    "url": "guides/using-krawler.html",
    "revision": "25a4de26bc99c9076e2ca18806f15e19"
  },
  {
    "url": "index.html",
    "revision": "bde04c9439aa4b34bb47d239b675064e"
  },
  {
    "url": "reference/hooks.html",
    "revision": "991749614f047b2c90ee507331ce4c78"
  },
  {
    "url": "reference/index.html",
    "revision": "03f739d7781c796af620cad161a4c1b2"
  },
  {
    "url": "reference/known-issues.html",
    "revision": "2b575a0fae77582c505c8f3b9090c3cc"
  },
  {
    "url": "reference/services.html",
    "revision": "122e42878ff6c5fad9347f53e276dea9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
