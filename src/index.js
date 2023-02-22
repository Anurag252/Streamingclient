"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamRequest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const stream_1 = require("stream");
class CustomReadableStream extends stream_1.Readable {
    constructor(data, timeout) {
        super();
        this._data = data;
        this._timeout = timeout;
    }
    _read() {
        this.push(this._data);
        setTimeout(() => {
            this.push(null);
        }, this._timeout); // signals end of stream
    }
}
const streamRequest = async (requestOptions) => {
    const k = require.cache[require.resolve('node-fetch')];
    const body = new CustomReadableStream(requestOptions.body, requestOptions.timeout);
    const requestInit = {
        body: body,
        headers: requestOptions.headers,
        method: requestOptions.method,
    };
    return await (0, node_fetch_1.default)(requestOptions.url, requestInit);
};
exports.streamRequest = streamRequest;
//# sourceMappingURL=index.js.map