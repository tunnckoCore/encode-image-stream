# [encode-image-stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Encode image to base64 string, just encode. ~20 sloc.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i encode-image-stream --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var encodeImageStream = require('encode-image-stream')
var concatStream = require('concat-stream')

fs.createReadStream('./foo.png')
  .pipe(encodeImageStream())
  .pipe(concatStream(function (buf) {
    console.log(buf.toString('utf-8'))
    //=> 'iVBORw0KGgoAAAANSUhEUgAAALoAAAA3CAMA ...'
  }))
```


## Related
- [generate](https://github.com/generate/generate): Project generator, for node.js.
- [gulp-micromatch](https://github.com/tunnckocore/gulp-micromatch): Filter vinyl files with glob patterns, string, regexp, array, object or matcher function. micromatch stream.
- [read-source-stream](https://github.com/tunnckocore/read-source-stream): Streaming read of local file or remote url.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/encode-image-stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/encode-image-stream
[npmjs-img]: https://img.shields.io/npm/v/encode-image-stream.svg?label=encode-image-stream

[license-url]: https://github.com/tunnckoCore/encode-image-stream/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/encode-image-stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/encode-image-stream.svg

[travis-url]: https://travis-ci.org/tunnckoCore/encode-image-stream
[travis-img]: https://img.shields.io/travis/tunnckoCore/encode-image-stream.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/encode-image-stream
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/encode-image-stream.svg

[david-url]: https://david-dm.org/tunnckoCore/encode-image-stream
[david-img]: https://img.shields.io/david/tunnckoCore/encode-image-stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg