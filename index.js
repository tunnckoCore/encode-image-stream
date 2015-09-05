/*!
 * encode-image-stream <https://github.com/tunnckoCore/encode-image-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var through2 = require('through2')

module.exports = function encodeImage () {
  var last = null
  return through2(function (chunk, enc, next) {
    chunk = last ? Buffer.concat([last, chunk]) : chunk
    last = last ? null : last

    var len = chunk.length
    var remaining = len % 3

    if (remaining !== 0) {
      last = chunk.slice(len - remaining)
      chunk = chunk.slice(0, len - remaining)
    }

    this.push(chunk.toString('base64'))
    next()
  }, function (cb) {
    if (last) this.push(last.toString('base64'))
    this.push(null)
    cb()
  })
}

