import fetch, {RequestInit, BodyInit, Headers} from 'node-fetch';
import {Readable} from 'stream';

export interface RequestOptions {
  url: string;
  headers?: Headers | undefined;
  method: string;
  body: string;
  timeout: number;
}

class CustomReadableStream extends Readable {
  private _data: string;
  private _timeout: number;

  constructor(data: string, timeout: number) {
    super();
    this._data = data;
    this._timeout = timeout;
  }

  _read(): void {
    this.push(this._data);
    setTimeout(() => {
      this.push(null);
    }, this._timeout); // signals end of stream
  }
}

export const streamRequest = async (requestOptions: RequestOptions) => {
  const k = require.cache[require.resolve('node-fetch')];

  const body: BodyInit = new CustomReadableStream(
    requestOptions.body,
    requestOptions.timeout
  );
  const requestInit: RequestInit = {
    body: body,
    headers: requestOptions.headers,
    method: requestOptions.method,
  };
  return await fetch(requestOptions.url, requestInit);
};
