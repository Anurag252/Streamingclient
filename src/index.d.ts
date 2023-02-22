import { Headers } from 'node-fetch';
export interface RequestOptions {
    url: string;
    headers?: Headers | undefined;
    method: string;
    body: string;
    timeout: number;
}
export declare const streamRequest: (requestOptions: RequestOptions) => Promise<import("node-fetch").Response>;
