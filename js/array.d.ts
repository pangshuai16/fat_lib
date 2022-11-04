export declare function leftJoin(config: {
    leftArray: object[];
    rightArray: object[];
    keys: string | string[];
    params: string | string[];
    fillValue?: string | number | null | undefined | 'preValue';
}): any[];
export declare function innerJoin(config: {
    leftArray: object[];
    rightArray: object[];
    keys: string | string[];
    params: string | string[];
    fillValue?: any;
}): object[];
