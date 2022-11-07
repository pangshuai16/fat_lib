/**
 * @desc 为给定DOM元素绑定触摸事件，返回.remove方法为自销毁程序
 * @param {Object} params
 * @param {HTMLElement} params.el 需要绑定的DOM元素，默认为document.body
 * @param {Function} params.left 触摸方向为左的回调函数
 * @param {Function} params.right 触摸方向为右的回调函数
 * @param {Function} params.up 触摸方向为上的回调函数
 * @param {Function} params.down 触摸方向为下的回调函数
 * @param {Function|null} params.move 触摸移动的回调，为null时禁用touchmove事件
 * @param {'x'|'y'} params.direction 触摸需要识别的方向，默认双方向
 * @param {Function} params.start 触摸开始的回调函数
 * @returns {Object} Object:{ remove }
 */
export default function useTouchEvent(params: {
    el?: HTMLElement,
    left?: Function,
    right?: Function,
    up?: Function,
    down?: Function,
    start?: Function,
    move?: Function | null,
    direction?: 'x' | 'y'
}) {
    let touchCoord: { x1: number, x2: number, y1: number, y2: number }
    let delta = {x: 0, y: 0}
    let direction: 'left' | 'right' | 'up' | 'down'
    let el = params.el || document.body

    el.addEventListener('touchstart', handle)
    el.addEventListener('touchend', handle)
    if (params.move !== undefined) el.addEventListener('touchmove', handle)

    function handle(event: TouchEvent) {
        switch (event.type) {
            case "touchstart":
                Object.assign(touchCoord, {x1: event.targetTouches[0].clientX, y1: event.targetTouches[0].clientY})
                if (params.start) params.start()
                break
            case "touchend":
                Object.assign(touchCoord, {x2: event.changedTouches[0].clientX, y2: event.changedTouches[0].clientY})
                Object.assign(delta, {x: touchCoord.x2 - touchCoord.x1, y: touchCoord.y2 - touchCoord.y1})
                // 根据差值判断方向
                switch (params?.direction) {
                    case 'x':
                        direction = delta.x > 0 ? 'right' : 'left'
                        break
                    case 'y':
                        direction = delta.y > 0 ? 'down' : 'up'
                        break
                    default:
                        if (Math.abs(delta.y) > Math.abs(delta.x)) {
                            direction = delta.y > 0 ? 'down' : 'up'
                        } else {
                            direction = delta.x > 0 ? 'right' : 'left'
                        }
                }

                // 根据方向调用函数
                try {
                    // @ts-ignore
                    params[direction]()
                } catch (e) {
                    console.log("touch事件" + direction + '方法出错')
                    console.log(e)
                }
                break
            default:
                if (params.move === null) event.preventDefault()
                if (params.move) params.move()
        }
    }

    return {
        remove() {
            el.removeEventListener('touchstart', handle)
            el.removeEventListener('touchend', handle)
            el.removeEventListener('touchmove', handle)
        }
    }
}
