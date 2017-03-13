export class CommonUtils {
    public static scrollToBottomWithAnimate(step: number) {
        setTimeout(function () {
            step = step + 1;
            if (step == 10)
                return;
            else {
                window.scrollTo(0, document.body.offsetHeight / (10 - step));
                CommonUtils.scrollToBottomWithAnimate(step);
            }
        }, 10);
    }
}