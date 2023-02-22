"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
jest.setTimeout(150000);
test('test streaming', async () => {
    const requestOptions = {
        method: 'POST',
        body: 'This is test ',
        timeout: 1000,
        url: 'https://some-url.some-domain',
    };
    //mock fetch
    if (require.cache[require.resolve('node-fetch')] !== undefined) {
        delete require.cache[require.resolve('node-fetch')];
        require.cache[require.resolve('node-fetch')].exports.fetch = () => { };
        require.cache[require.resolve('node-fetch')].exports = () => { };
    }
    const k = await (0, index_1.streamRequest)(requestOptions);
});
//# sourceMappingURL=index.specs.js.map