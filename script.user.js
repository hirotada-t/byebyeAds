// ==UserScript==
// @name         YouTube Ads Sckiper
// @namespace    http://tampermonkey.net/
// @version      2.1
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

const movieSkipper = () => {
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
    if (skipBtn.innerText === "スキップ") {
      skipBtn.click();
    }
  }
  if (confirmBtn) {
    confirmBtn.click();
  }
}
const disableAds = () => {
  document.querySelectorAll('ytd-ad-slot-renderer').forEach((ad) => {
    ad.style.display = 'none';
  });
  document.querySelectorAll("ytd-search-pyv-renderer").forEach((ad) => {
    ad.style.display = "none";
  });
}

const intervalId = setInterval(() => {
  movieSkipper();
  disableAds();
}, 1000);

const isWatchPage = window.location.pathname.split("/")[1] === "watch";
if (!isWatchPage) {
  clearInterval(intervalId);
}