"use strict";
var CommonUtils = (function () {
    function CommonUtils() {
    }
    CommonUtils.scrollToBottomWithAnimate = function (step) {
        setTimeout(function () {
            step = step + 1;
            if (step == 10)
                return;
            else {
                window.scrollTo(0, document.body.offsetHeight / (10 - step));
                CommonUtils.scrollToBottomWithAnimate(step);
            }
        }, 10);
    };
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;
//# sourceMappingURL=CommonUtils.js.map