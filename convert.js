"use strict"

var ndarray = require("ndarray")
var numeric = require("numeric")
var cwise = require("cwise")

var do_convert = cwise({
  args: ["array", "scalar", "index"],
  body: function(out, a, idx) {
    var v = a
    for(var i=0; i<idx.length-1; ++i) {
      v = v[idx[i]]
    }
    out = v[idx[idx.length-1]]
  }
})

module.exports = function convert(arr, dtype) {
  if(!dtype) {
    dtype = "float64"
  }
  var shape = numeric.dim(arr)
  var result = ndarray.zeros(shape, dtype)
  do_convert(result, arr)
  return result
}