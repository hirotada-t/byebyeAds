// ==UserScript==
// @name         YouTube Ads Sckiper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hirotada-t
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/hirotada-t/byebyeAds/main/script.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
})();
setInterval(() => {
  const adsVideoList = document.querySelectorAll(".ad-showing");
  const skipBtnList = document.querySelectorAll(".ytp-ad-skip-button");
  const existAds = exist(adsVideoList);
  const existSkip = exist(skipBtnList);
  console.log(existAds);
  if (existAds) {
    adsVideoList.forEach((v) => {
      v.playbackRate = 16;
      v.muted = true;
    });
  }
  if (existSkip) {
    skipBtnList.forEach((b) => {
      if (b.innerText === "広告をスキップ") {
        b.click();
      }
    });
  }
}, 1000);

const exist = (eleList) => {
  return eleList.length > 0;
};
