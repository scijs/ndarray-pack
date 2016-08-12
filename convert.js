"use strict"

var ndarray = require("ndarray")
var do_convert = require("./doConvert.js")

module.exports = function convert(arr, result, Type) {
  if (typeof Type === 'undefined') {
    Type = Float64Array;
  }
  var shape = [], c = arr, sz = 1
  while(Array.isArray(c)) {
    shape.push(c.length)
    sz *= c.length
    c = c[0]
  }
  if(shape.length === 0) {
    return ndarray()
  }
  if(!result) {
    result = ndarray(new Type(sz), shape)
  }
  do_convert(result, arr)
  return result
}
