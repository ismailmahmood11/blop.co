'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3374705ef85fab71d3a33577aa62b34e",
"assets/AssetManifest.json": "9b06a4d796bf197752fc28f64a9deed8",
"assets/assets/animation/animation_bottom.riv": "8395d1c4f9ab1db52cdf7670c3d1d2ac",
"assets/assets/animation/how_generic_design_can_actually_hurt_your_brand.riv": "eeeb7aaeb825111b5bf8a5e9a3491126",
"assets/assets/animation/logo_animate_2.riv": "5b7e9415703be8c73147e68383af197d",
"assets/assets/animation/mobile_bg.riv": "8b913f5e075789b1197172b045f35f00",
"assets/assets/animation/READ_OUR_DESIGN_ARTICLES.riv": "c903e58c3613e784e32680f359b5da9c",
"assets/assets/animation/the_importance_of_good_branding.riv": "231f5194e8e5e6be21bc7b731b53daa9",
"assets/assets/animation/what_makes_a_good_uiux_design.riv": "6a9aa2f18456e77cacb8ac61ccf62d05",
"assets/assets/animation/what_makes_for_a_good_design.riv": "b8f820712622a690a4cf557092c418cb",
"assets/assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/gif/logo_loop.gif": "6490548e1f023cfa75de685e110a27bf",
"assets/assets/images/BackGround/bg_with_text.png": "975f6d66f98f37702b653990169de4ac",
"assets/assets/images/BackGround/main_bg.png": "e8719dca0eee8ef2bfd30ef6d92a526f",
"assets/assets/images/BackGround/new/Blop%2520Logo%25204.png": "224ce44f0cbd9b8b6b9838171825592e",
"assets/assets/images/BackGround/new/Blop_bg_with_text.png": "ab4e9981524eadbccf7b6535e1068148",
"assets/assets/images/BackGround/new/Blop_logo_!color.png": "86538d6de0093bc468145d8c68bfc697",
"assets/assets/images/BackGround/new/Blop_logo_!color_rotated.png": "8d79bf6fbddeac7c274326e41803caae",
"assets/assets/images/BackGround/new/Group.png": "8b479aa4fc9ba567745b94f7d92af921",
"assets/assets/images/BackGround/new/_.png": "03d7ebf42885d0d5fa82f2f637af9a75",
"assets/assets/images/extra/contact_support.png": "34bbd6d02948616d2a6843b80fc867fc",
"assets/assets/images/extra/not_listed_location.png": "0c119141bb87456debd4696a1dbe2656",
"assets/assets/images/logos/blop_text.png": "6d656ff2229ff3db29bd5561d8339aef",
"assets/assets/images/logos/logo.png": "9c1bb6d15580a20bb905b62195759c21",
"assets/assets/images/logos/logo_with_text.png": "948bf6bc2a81d346d2ddff8c04a19e47",
"assets/assets/images/logos/new/Group%25205%2520(1).png": "365131c4d85c70597d714d8ba1bffdd3",
"assets/assets/images/logos/new/Group%25206%2520(1).png": "60cedd4c3b6ed5b8385c5b02fd9087a6",
"assets/assets/images/logos/new/Group%25207%2520(1).png": "cfd2bf15e6646ed1af3f859500e000ac",
"assets/assets/images/logos/new/Group%25207%2520(2).png": "13e1732dd42e16cc3967ba0080ee0a0c",
"assets/assets/images/NewUiImages/Ellipse%2520110%2520(Stroke).png": "e568d9283c365bcd321c5d4b101be6cf",
"assets/assets/images/NewUiImages/Ellipse%2520111%2520(Stroke).png": "bba1be5a0244d7c54fc4bce5f82d1126",
"assets/assets/images/NewUiImages/Union%2520(Stroke).png": "2adf96ad3877df091a157f6161db8ae7",
"assets/FontManifest.json": "725f8cb4faf75e61675b85ff703fe6df",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "4fe12696c5fe85b3204289def028c152",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "ce4166950c65adc80826e2abf46f3e78",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "33abade16fc4306bb5364e5d2ecd4b2e",
"icons/android-chrome-512x512.png": "ea7ad9dd2c86c15e95361232073172b2",
"icons/apple-touch-icon.png": "fbd92a15d69bfd03e4e1e899555f0df2",
"icons/favicon-16x16.png": "bee50ff2c434bb6c59b47d28685a9644",
"icons/favicon-32x32.png": "f0015a07aa976fbb5a9ef97cf760c942",
"icons/favicon-96x96.png": "fb3be17e3e3276a8b8ecd4172f74dac7",
"icons/favicon.ico": "c39f26a03708f6e29d5638bb2a79ea83",
"img/logo_loop.gif": "6490548e1f023cfa75de685e110a27bf",
"index.html": "3d393beec1e2ea8ec6618d428b06dc8a",
"/": "3d393beec1e2ea8ec6618d428b06dc8a",
"main.dart.js": "43fe349f1af9a18e05a7032f12fdd573",
"manifest.json": "4344eb97229f6d7646e45ec33243f23a",
"styles.css": "3b5d729f9e4413fa38f7d94b3d42ca16",
"version.json": "0ebb02851244b0f95c021b7ac24aa922"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
