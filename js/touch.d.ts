export declare function useTouchEvent(params: {
    el?: HTMLElement;
    left?: Function;
    right?: Function;
    up?: Function;
    down?: Function;
    start?: Function;
    move?: Function | null;
    direction?: 'x' | 'y';
}): {
    remove(): void;
};
