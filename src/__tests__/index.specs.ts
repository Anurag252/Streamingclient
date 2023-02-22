import {streamRequest, RequestOptions} from '../index';

jest.setTimeout(150000);
test('test streaming', async () => {
  const requestOptions: RequestOptions = {
    method: 'POST',
    body: 'This is test ',
    timeout: 1000,
    url: 'https://some-url.some-domain',
  };

  //mock fetch
  if (require.cache[require.resolve('node-fetch')] !== undefined) {
    delete require.cache[require.resolve('node-fetch')];
    require.cache[require.resolve('node-fetch')]!.exports.fetch = () => {};
    require.cache[require.resolve('node-fetch')]!.exports = () => {};
  }

  const k = await streamRequest(requestOptions);
});
