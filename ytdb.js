(function() {
    'use strict';

    let refreshed = false;

    function checkForAd() {
        const player = document.querySelector('.html5-video-player');
        if (!player) return;

        if (player.classList.contains('ad-showing')) {
            if (!refreshed) {
                refreshed = true;
                location.reload();
            }
        } else {
            refreshed = false;
        }
    }

    const observer = new MutationObserver(checkForAd);

    observer.observe(document.documentElement, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });

    setInterval(checkForAd, 1000);
})();
