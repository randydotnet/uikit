export const Observer = window.MutationObserver || window.WebKitMutationObserver;
export const requestAnimationFrame = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 1000 / 60); };
export const cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;

export const hasTouch =
    ('ontouchstart' in window) ||
    (window.DocumentTouch && document instanceof DocumentTouch) ||
    (navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0) || //IE 10
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0); //IE >=11

export const transitionend = (function () {

    var element = document.body || document.documentElement,
        names = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }, name;

    for (name in names) {
        if (element.style[name] !== undefined) {
            return names[name];
        }
    }

})();

export const animationend = (function () {

    var element = document.body || document.documentElement,
        names = {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
        }, name;

    for (name in names) {
        if (element.style[name] !== undefined) {
            return names[name];
        }
    }

})();