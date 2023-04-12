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
    "revision": "250dc25ebe67b85541c2a108cbc5cec8"
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
    "url": "assets/js/12.70b1f7cb.js",
    "revision": "bc0a740c50e7e5c51f1470702e1e9ded"
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
    "url": "assets/js/15.be3abb3f.js",
    "revision": "b740b1fb368da4056be67da7ba04f2fc"
  },
  {
    "url": "assets/js/16.73247346.js",
    "revision": "348b677e9262ba78f81531ec0c453735"
  },
  {
    "url": "assets/js/17.f668e8b3.js",
    "revision": "2d8626482aad84fb0192e9aa14d19284"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.23607813.js",
    "revision": "a37d56d147c58d34bf43d444e9e2a04c"
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
    "revision": "493975d3a7fa78dbc56a70516eef7f1c"
  },
  {
    "url": "categories/index.html",
    "revision": "df2e3472c1ef8230b707ac8c0682c659"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0c474b3ef9a82c17e4b49655fc6e3b3c"
  },
  {
    "url": "categories/Qt/index.html",
    "revision": "a168f95898dadd3e51b1f8b20225fa21"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3eac513d0a60a4fa6424fbbed7ca8471"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "77ea2dfcce4b02d93cbe1180af90fda5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "68fa21e1507460061c976af5ebd0a644"
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
    "revision": "dda9723aa0ff2da7a6a5884d788e88a9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "361ce7e748571ccde3bf134e591d1d3e"
  },
  {
    "url": "tags/C++/index.html",
    "revision": "22aae8e238d7e3ea93ea6a5f74f8d452"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5e5979609438fb82cdce42e4e1c2f77a"
  },
  {
    "url": "tags/Qt/index.html",
    "revision": "1563c7df15b7501f6aedaefeeb09aeff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d2529bc0ae054247e1070031f84d1948"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "017bf491644c0cb2bd3ecf0ec54a6a8c"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "4a07f426a2718f1c4658890ad0ed3c00"
  },
  {
    "url": "tags/开源库/index.html",
    "revision": "17905a80ce84af5dc716725c7588801b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "38f543550484fb16eb467f962ecb5ee0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "08763fa08a33a1cd895e43b646261cae"
  },
  {
    "url": "timeline/index.html",
    "revision": "a53c805e4db5e8123c44c3beecb52208"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/C++开源库/C++开源库.html",
    "revision": "0e0ce867986f7999e64192cb97d68f5b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "15a84ab4a77f7c782292c8d52633c7cd"
  },
  {
    "url": "技术文章/Qt/Qt.html",
    "revision": "f466a13dad1d4703a26e8c1386e595de"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2e96e450cc713f2c0b358ec02c15ed76"
  },
  {
    "url": "生活分享/life.html",
    "revision": "69d6b696a4f8c74567920a7fdcb86eb8"
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
