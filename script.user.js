// ==UserScript==
// @name         YouTube Ads Sckiper
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  try to take over the world!
// @author       hirotada-t
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/hirotada-t/byebyeAds/main/script.user.js
// @downloadURL
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
})();
setInterval(() => {
  const moviePlayer = document.getElementById("movie_player");
  const existAds = moviePlayer.classList.contains("ad-showing");
  // const skipBtnList = document.querySelectorAll(".ytp-ad-skip-button");
  // const existSkip = exist(skipBtnList);
  if (existAds) {
    moviePlayer.playbackRate = 16;
    moviePlayer.muted = true;
  }
  // if (existSkip) {
  //   skipBtnList.forEach((b) => {
  //     if (b.innerText === "広告をスキップ") {
  //       b.click();
  //     }
  //   });
  // }
}, 1000);
