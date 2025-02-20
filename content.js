const adSelectors = [
    'iframe[src*="ad"]',
    'img[src*="ad"]',
    'div[class*="ad"]',
    'div[id*="ad"]',
    'a[href*="ad"]',
    'ytd-compact-promoted-video-renderer',
    'ytd-promoted-sparkles-web-renderer',
    'ytd-promoted-video-renderer',
    'ytd-display-ad-renderer',
    'ytd-video-masthead-ad-advertiser-info-renderer',
    '.mx-player-ad', 
    'div[class*="mx-player-ad"]',
    'div[id*="mx-player-ad"]'
  ];
  
  function removeAds() {
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  }
  

  setTimeout(() => {
    const observer = new MutationObserver(removeAds);
    observer.observe(document, { childList: true, subtree: true });
  
    removeAds();
  }, Math.random() * 1000 + 500);