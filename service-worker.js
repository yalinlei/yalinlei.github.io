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
    "revision": "d12609fbcfe2c14ae59a8cf9d1e2b5e2"
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
    "url": "assets/js/13.deac7071.js",
    "revision": "9f262f86ffc6d62586cac6b41a40a320"
  },
  {
    "url": "assets/js/14.f1c8e62b.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.5a741e9e.js",
    "revision": "116203cd3252e03bc40acb4af122a2dc"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.6dca6077.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
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
    "url": "assets/js/app.2a4413ac.js",
    "revision": "1f62e922d02be879494a958d91d2545a"
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
    "revision": "d22f287e5a7481b582a2f05c0e4f38c5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "20eff2d4da7718c7782d3b6c28213e2d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a799dd0bd292c57d45b051d5a5d8e092"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d02254b6e6e3e259a0b581e7795d70e1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0b5613d7900bf8d132a776f77eaa0202"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "624a8edaac98b196cf9389597b82a87b"
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
    "revision": "a8b99babc08479a3ce28812992943773"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6b3204bdfab3576cae7e0c90e9f3fde7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "47713819e3501a9f93861f9dc4cde24f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4a3c8b5420920b88fe45129bd0930592"
  },
  {
    "url": "tags/js/index.html",
    "revision": "10212c91bb57110f505d23de46204cf5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3b765c6a0060d3b5f0a5c9442e875bdf"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "94dcf7be6b8f5ef8c3b9ff20d92cd016"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3355be23a2ef47374deaf2f38f96ef70"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b393125f3617aa2283fd9dc6e9dbceb0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e0b094a35092a2b1c5440051fed30f64"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6c926c2d6ab7aa4631830dc644299f10"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7e2af01d9c4249aa357fc929a23a461a"
  },
  {
    "url": "timeline/index.html",
    "revision": "7e3fa11ac1164d933847bf0178b5c908"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dcbb96a1e2b0fcfec74b32bc498f3d64"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fa4bd7cfb37ead8ede503b05f019b7ad"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "962aca0bb22d54f7834742e27ebb2ca2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b976e3935e898197e963bd2d952dd32d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "df39f0a8311d55fef4ace3f8e9e0c74f"
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
