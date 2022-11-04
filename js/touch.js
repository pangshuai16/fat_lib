"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTouchEvent = void 0;
function useTouchEvent(params) {
    let touchCoord;
    let delta = { x: 0, y: 0 };
    let direction;
    let el = params.el || document.body;
    el.addEventListener('touchstart', handle);
    el.addEventListener('touchend', handle);
    if (params.move !== undefined)
        el.addEventListener('touchmove', handle);
    function handle(event) {
        switch (event.type) {
            case "touchstart":
                Object.assign(touchCoord, { x1: event.targetTouches[0].clientX, y1: event.targetTouches[0].clientY });
                if (params.start)
                    params.start();
                break;
            case "touchend":
                Object.assign(touchCoord, { x2: event.changedTouches[0].clientX, y2: event.changedTouches[0].clientY });
                Object.assign(delta, { x: touchCoord.x2 - touchCoord.x1, y: touchCoord.y2 - touchCoord.y1 });
                switch (params?.direction) {
                    case 'x':
                        direction = delta.x > 0 ? 'right' : 'left';
                        break;
                    case 'y':
                        direction = delta.y > 0 ? 'down' : 'up';
                        break;
                    default:
                        if (Math.abs(delta.y) > Math.abs(delta.x)) {
                            direction = delta.y > 0 ? 'down' : 'up';
                        }
                        else {
                            direction = delta.x > 0 ? 'right' : 'left';
                        }
                }
                try {
                    params[direction]();
                }
                catch (e) {
                    console.log("touch事件" + direction + '方法出错');
                    console.log(e);
                }
                break;
            default:
                if (params.move === null)
                    event.preventDefault();
                if (params.move)
                    params.move();
        }
    }
    return {
        remove() {
            el.removeEventListener('touchstart', handle);
            el.removeEventListener('touchend', handle);
            el.removeEventListener('touchmove', handle);
        }
    };
}
exports.useTouchEvent = useTouchEvent;
