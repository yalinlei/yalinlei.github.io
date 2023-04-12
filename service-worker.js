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
    "revision": "5a83b47d9a6ca02eeab08c2e78375faa"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.cfdc75b2.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.8e5c271b.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.6dca6077.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.37c252ad.js",
    "revision": "9f4ab406bef0f39aff50daf358815617"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "2c3da9d42633e0dcf223faea666f1363"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c6b7b0e5c48878821fb688c54b8ece5a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bab60acf654ecff943a4c4fea0609d0a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4c21927c1279254c951b1e5ff2572258"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9d4799c49e556a968b3ae5ec7c8b8c92"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3ce0afc9697dca01536c64e1db35d94b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a0ded7d0ba9b612fcb1e53b64c2a0221"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6bf3eb22691414d6b0dace5441fb1bb5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "607bed03a470516470f195fd83b8318d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b0c40296eaad62519f9fffdfb53c8a7c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5be038628dcfe12f01c8a69d387a41b7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1e23007f32cc8c72b985f1485e6742c8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d774293788d9c4d118ce6a875db1f561"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7cdd95712cc9debea647c7da78a6e4b3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2464e0c32ee02076329128ed2238175d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6fc65621732865c7a59ea8d43be2ac0f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a04e02a2ab99e0046614267b88e8e190"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "721139411069be9d5985669d5614498d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b57f2738b5406256acb669712a796b19"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "55c94073ef2ccc365e9bf62686e2d3d2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0464cbf00b27d0b6821addd2a1df958a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ec38f34178b44cea6b95125f491489ba"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fc0265382ee6dffa2336dad07b2f1e25"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4da4ff9a2bd54f78a3e4f4a73936c464"
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
