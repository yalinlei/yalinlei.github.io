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
    "revision": "8790ce1bf5ad490b26cb0ebb85921eb4"
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
    "url": "assets/js/12.92f3a129.js",
    "revision": "feb62b792b1b937dacf6dddeb3f0189a"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.78ab311f.js",
    "revision": "4fcd914a20ef5070689991080676f990"
  },
  {
    "url": "assets/js/15.def2e92a.js",
    "revision": "cd2b79c27582fe020bd837e1f5480e2c"
  },
  {
    "url": "assets/js/16.73247346.js",
    "revision": "348b677e9262ba78f81531ec0c453735"
  },
  {
    "url": "assets/js/17.7b47eec5.js",
    "revision": "4ed7f7b8c0fbc414493298392093603e"
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
    "url": "assets/js/app.4cece08f.js",
    "revision": "8b28a9abbec0ef1cd2f037d16847f2ba"
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
    "revision": "9e2c33ef654ba8c771ebbc9eb01e1be0"
  },
  {
    "url": "categories/index.html",
    "revision": "4e3e2caad9c6c78c247dc7d8f5322ee3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a3caf2eebe7c44410a1ce132aed1abfd"
  },
  {
    "url": "categories/Qt/index.html",
    "revision": "99c5b50617414442c8be2a0015847728"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1e3b4abf17e2bc8202c808e1bff74855"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "db5b91dcb234d13461e6c85daede0d69"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "54637213100d067733f26e7648574adf"
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
    "revision": "0e4bba552414c2bf40692998c4732836"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8dcc0f342a8aa8ed3dd2ffc49160ddfe"
  },
  {
    "url": "tags/C++/index.html",
    "revision": "72a52fd5cacfbbe912f6eed8f7b3cc8e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0cc3e40df9566814694edf1b9180edba"
  },
  {
    "url": "tags/Qt/index.html",
    "revision": "dd1c09c565cacb83054d9d5dd4e40aa2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6d392bfec522106c586a4d9eff003a46"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6680dac4595a2058cceac4c3616c4760"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "285ebd4887c2e5e001622877b0acf9dc"
  },
  {
    "url": "tags/开源库/index.html",
    "revision": "e36f749d1270edbc6ae933acc15504ef"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4970ffcfeddef510072f72c5d2b4c248"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cdcf52d31ce0f7168fdceb93a92d393d"
  },
  {
    "url": "timeline/index.html",
    "revision": "da4eacc05a1ae2115d5fc2ded5e2b070"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/C++开源库/C++开源库.html",
    "revision": "9b6999f6a427b0f2a49a9f401e5c1dfd"
  },
  {
    "url": "技术文章/index.html",
    "revision": "38855df61b956f934e66ecdd73c92c47"
  },
  {
    "url": "技术文章/Qt/Qt.html",
    "revision": "3e28ff3fadf83e75b1f511e30fb5c5dc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9e5acc552d5d9658f9de1bfa6a324a4b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e88c6e0d95116bd564644b665d4aabfd"
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
