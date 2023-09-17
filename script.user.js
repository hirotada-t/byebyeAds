// ==UserScript==
// @name         YouTube Ads Sckiper
// @namespace    http://tampermonkey.net/
// @version      0.1.7
// @description  try to take over the world!
// @author       hirotada-t
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/hirotada-t/byebyeAds/main/script.user.js
// @downloadURL
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
})();

const intervalId = setInterval(() => {
  const moviePlayer = document.getElementById("movie_player");
  const existAds = moviePlayer.classList.contains("ad-showing");
  const skipBtn = document.querySelector(".ytp-ad-skip-button-text");
  const confirmBtn = document.getElementById("confirm-button");

  if (existAds) {
    const video = moviePlayer.querySelector("video");
    video.playbackRate = 16;
    video.muted = true;
  }
  if (skipBtn) {
    if (skipBtn.innerText === "広告をスキップ") {
      skipBtn.click();
    }
  }
  if (confirmBtn) {
    confirmBtn.click();
  }
}, 1000);

const isWatchPage = window.location.pathname.split("/")[0] === "watch";
if (!isWatchPage) {
  clearInterval(intervalId);
}