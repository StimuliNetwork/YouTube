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
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => {
                ad.style.display = 'none';
            });
        });
    }

    function clearConsole() {
        console.clear();
    }

    function runOnClick() {
        hideAds();
        clearConsole();
    }

    runOnClick();

    window.addEventListener('click', runOnClick);
})();
