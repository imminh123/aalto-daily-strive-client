if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1051b61c"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Rr513Q4S7TpvaUP8e9agm/_buildManifest.js",revision:"910dfcea05043977729c80444e52cb01"},{url:"/_next/static/Rr513Q4S7TpvaUP8e9agm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/195-e13657ce640e6a34.js",revision:"e13657ce640e6a34"},{url:"/_next/static/chunks/565-e362861e27303b3c.js",revision:"e362861e27303b3c"},{url:"/_next/static/chunks/577-4d06ba0d12456cef.js",revision:"4d06ba0d12456cef"},{url:"/_next/static/chunks/940-2b167b2920ad40aa.js",revision:"2b167b2920ad40aa"},{url:"/_next/static/chunks/97-fdf7578ea5f272cb.js",revision:"fdf7578ea5f272cb"},{url:"/_next/static/chunks/framework-8e279965036b6169.js",revision:"8e279965036b6169"},{url:"/_next/static/chunks/main-044f0b46bba1c896.js",revision:"044f0b46bba1c896"},{url:"/_next/static/chunks/pages/_app-630b13b2be5dea09.js",revision:"630b13b2be5dea09"},{url:"/_next/static/chunks/pages/_error-38589ec26297365a.js",revision:"38589ec26297365a"},{url:"/_next/static/chunks/pages/add-a2716273e0ed55eb.js",revision:"a2716273e0ed55eb"},{url:"/_next/static/chunks/pages/index-fefff53da09a9944.js",revision:"fefff53da09a9944"},{url:"/_next/static/chunks/pages/setting-5b16bde4741b5f6d.js",revision:"5b16bde4741b5f6d"},{url:"/_next/static/chunks/pages/signin-187117a7e57d6135.js",revision:"187117a7e57d6135"},{url:"/_next/static/chunks/pages/signup-a360886e0a369d3a.js",revision:"a360886e0a369d3a"},{url:"/_next/static/chunks/pages/t3-9af059c534097784.js",revision:"9af059c534097784"},{url:"/_next/static/chunks/pages/todo-e09715165da72794.js",revision:"e09715165da72794"},{url:"/_next/static/chunks/pages/todo/user/%5Bid%5D-3d0775071a897396.js",revision:"3d0775071a897396"},{url:"/_next/static/chunks/pages/topic-2d6adfac3f82ad6c.js",revision:"2d6adfac3f82ad6c"},{url:"/_next/static/chunks/pages/topic/%5Bid%5D-09bf88401dc9548a.js",revision:"09bf88401dc9548a"},{url:"/_next/static/chunks/pages/topic/%5Bid%5D/%5Btask%5D-84b31a15979e71c5.js",revision:"84b31a15979e71c5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd8027ecb5121007.js",revision:"fd8027ecb5121007"},{url:"/_next/static/css/1d6006ed6be219e7.css",revision:"1d6006ed6be219e7"},{url:"/_next/static/media/confetti.36f8b12f.svg",revision:"36f8b12f"},{url:"/_next/static/media/home.50c12003.svg",revision:"c2baee0525696aedf5763a80902392a1"},{url:"/_next/static/media/menu.8a673c77.svg",revision:"564ad9c0a7dc4ee73cdb3e837f76f17b"},{url:"/_next/static/media/placeholder_avatar.65a2b75d.png",revision:"877e3399937bda6a954b79daf64b0b94"},{url:"/_next/static/media/plus.66b97c04.svg",revision:"611b999bd9ee633e14b747a13e5a96d6"},{url:"/_next/static/media/settings.7bb9375f.svg",revision:"c9f166034b6c293bc576a51deec67352"},{url:"/_next/static/media/taskscreen.c8144ea8.png",revision:"776fdb6738bfd505c0841ba73ec23668"},{url:"/_next/static/media/trophy.f6082fc8.svg",revision:"6626ef111b4877b31be1e32b078dd122"},{url:"/_next/static/media/water.1ad124ad.png",revision:"1ad124ad"},{url:"/favicon.ico",revision:"1a63c59997cbd94dfdbe1563bdcecf03"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
