/*!
 * encode-image-stream <https://github.com/tunnckoCore/encode-image-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var encodeImageStream = require('./index')
var concatStream = require('concat-stream')
var through2 = require('through2')

test('encode-image-stream works for images', function (done) {
  fs.createReadStream('./foo.png')
    .pipe(encodeImageStream())
    .pipe(concatStream(function (body) {
      var str = body.toString('utf-8')
      test.ok(str.length > 10)
      test.equal(str[str.length - 1], '=')
      done()
    }))
})

test('works correctly when writing to html <img>', function (done) {
  var w = fs.createWriteStream('foo.html')
  w.write('<img src="data:image/png;base64,')
  w.on('close', function () {
    var data = fs.readFileSync('foo.html')
    test.ok(data.indexOf('<img src="data:image/png;base64,') !== -1)
    test.ok(data.indexOf('UAwAAAABJRU5ErkJggg==">') !== -1)
    done()
  })

  fs.createReadStream('./foo.png')
    .pipe(encodeImageStream())
    .pipe(through2(function (chunk, enc, callback) {
      callback(null, chunk)
    }, function (cb) {
      this.push('">')
      cb()
    }))
    .pipe(w)
})

test('should encode other files, but not correctly', function (done) {
  var chunks = []
  fs.createReadStream('./index.js')
    .pipe(encodeImageStream())
    .pipe(through2(function (chunk, enc, next) {
      chunks.push(chunk)
      next(null, chunk)
    }, function () {
      var last = chunks[chunks.length - 1]
      var chunk = last.toString('utf-8')
      test.ok(chunk.indexOf('==') === -1)
      done()
    }))
})
