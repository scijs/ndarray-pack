"use strict"

var ndarray = require("ndarray")
var numeric = require("numeric")
var cwise = require("cwise")

var do_convert = cwise({
  args: ["array", "index", "scalar"],
  body: function(out, idx, a) {
    var v = a
    for(var i=0; i<idx.length-1; ++i) {
      v = a[idx[i]]
    }
    out = v[idx[idx.length-1]]
  }
})

module.exports = function convert(arr, dtype) {
  if(dtype === undefined) {
    dtype = "float64"
  }
  var shape = numeric.dim(arr)
  var result = ndarray.zeros(shape, dtype)
  do_convert(result, arr)
  return result
}