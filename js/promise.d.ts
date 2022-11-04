export declare const run: (fn: Promise<any>) => Promise<any[]>;
export declare const usePolling: (fn: Promise<any>) => {
    start: (ms: number) => void;
    stop: () => void;
};
export declare function singleRunning(fn: Function): () => Promise<void>;
