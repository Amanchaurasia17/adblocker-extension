function waitForBody(callback) {
  if (document.body) {
    callback();
  } else {
    new MutationObserver((mutations, observer) => {
      if (document.body) {
        observer.disconnect();
        callback();
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
}

waitForBody(() => {
  function removeAds() {
    document.querySelectorAll("#player-ads, .ad-container, .ad-display, .ad-showing, .ytp-ad-module").forEach(ad => {
      ad.remove();
    });

    const skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-skip-button-modern");
    if (skipButton) {
      skipButton.click();
    }
  }

  const observer = new MutationObserver(() => {
    removeAds();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  removeAds();
});
