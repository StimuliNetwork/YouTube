(function() {
    'use strict';

    const adSelectors = [
        '.ad-class',
        '[id^="ad-"]',
        '[class*=" ad "]',
        '[class*="-ad-"]',
        '[class*="_ad_"]',
        '.video-ads',
        '.ytp-ad-overlay-container',
        '.ad-zone',
        '.textads',
        '.banner-ads',
        '.ad-unit',
        'iframe[src*="doubleclick.net"]',
        'iframe[src*="adservice.google.com"]'
    ];

    function hideAds() {
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(ad => {
                ad.style.display = 'none';
            });
        });
    }

    hideAds();

    const observer = new MutationObserver(() => {
        hideAds();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    setInterval(hideAds, 2000);
})();
