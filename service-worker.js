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
    "revision": "c5f653e0e94ea6b7a4cdcf941a0ad0df"
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
    "url": "assets/js/12.a35e3f3b.js",
    "revision": "aea848c9ee3e194266f61f9520418bd2"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8c6a5f0d.js",
    "revision": "e5242e8a78f303862d0784e62abbece9"
  },
  {
    "url": "assets/js/15.d8a40514.js",
    "revision": "605ef7b42276e5ef6fe815954cf41306"
  },
  {
    "url": "assets/js/16.be351327.js",
    "revision": "90eec481b493f7e45af29c4dafd770f3"
  },
  {
    "url": "assets/js/17.a8b2175b.js",
    "revision": "2f389d77809e2148c6a423ae543a8ff6"
  },
  {
    "url": "assets/js/18.af53c19b.js",
    "revision": "62cf922ef79ed4ac0d8b542e77325b20"
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
    "url": "assets/js/app.d2537851.js",
    "revision": "b49d177c0f38c1997a4a1fffadcbf225"
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
    "url": "categories/C++/index.html",
    "revision": "2d547ba2a74839860de614e93d38b44b"
  },
  {
    "url": "categories/index.html",
    "revision": "53a8bdcbc2f1529b041fd06e1c80863d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "35a4979273334f8f69373d4a8a635315"
  },
  {
    "url": "categories/Qt/index.html",
    "revision": "399bf08d5dc6437853120340e83673d6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8c9bdf078202584e9798210a8f92ec57"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b9b5a5641204f5ae12a52dcac821cfe4"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "99718006ce2770d7eafbde462c2ef2d1"
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
    "revision": "0d1cc61f099ae218f13310ddfad4e4de"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "02e5b27993d117a1b112f78ca0ba5291"
  },
  {
    "url": "tags/C++/index.html",
    "revision": "2db4cb50d5d341fbc92de1ff9abcaded"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ed967dc9dc53c5b376152254ed1a5bb7"
  },
  {
    "url": "tags/Qt/index.html",
    "revision": "f9ef9cd6dd23b4ebe4c374f852f9da98"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c05bd2f2ea2dc95b2158dbbaccde857f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ce5b3eb67a652c61a4ed466696a89bc5"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "1f228d74a998c1251b5e22b5ce11cbb4"
  },
  {
    "url": "tags/开源库/index.html",
    "revision": "afa64b4ee1c92022dd76462094255df0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4cfbd5d94a4343abe4835c908587cfd3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1f0459e7c713e5f4bec74546cc62903a"
  },
  {
    "url": "timeline/index.html",
    "revision": "889dfa26b68174f9664f62d3c7523f3c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/C++开源库/C++开源库.html",
    "revision": "a33c278bc57dde4060f90ede83b43670"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bf4421261d410d7e3e4963a9f032e062"
  },
  {
    "url": "技术文章/Qt/Qt.html",
    "revision": "a17bf38dc5894aa7f1dcea18eeba18e4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9cd41d7586b222078e91a8538ad47d9c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2443b94355da25f3d4a8776583969ae1"
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
