# README

## Overview

A simple library to test out a http server perfomance with long living connections. 

## Details
This is a Node.js module that provides a `streamRequest` function for making HTTP requests with a Readable stream as the request body. It uses the `node-fetch` library for making the HTTP request.

## Installation

To use this module, you must have [Node.js](https://nodejs.org/) installed on your machine. Once you have Node.js installed, you can install this module using npm:

`npm install `


## Usage

To use this module, you can import the `streamRequest` function from the module:

```js
import { streamRequest } from '@your-username/stream-request';
//You can then use the streamRequest function to make an HTTP request with a Readable stream as the request body:


const requestOptions = {
  url: 'https://example.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({ foo: 'bar' }),
  timeout: 5000,
};

const response = await streamRequest(requestOptions);
const responseBody = await response.json();
console.log(responseBody);
```

The streamRequest function takes a requestOptions object with the following properties:

- url (string): the URL to make the request to
- headers (optional Headers): an object representing the request headers
- method (string): the HTTP method to use (e.g. "GET", "POST", etc.)
- body (string): the request body, as a string
- timeout (number): the timeout, in milliseconds, for the request
- The streamRequest function returns a Promise that resolves to the HTTP response.

License
This module is released under the MIT License.
