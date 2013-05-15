"use strict"

require("tap").test("ndarray-pack", function(t) {

  var x = [[1, 0, 1],
           [0, 1, 1],
           [0, 0, 1],
           [1, 0, 0]]

  var y = require("../convert.js")(x)

  for(var i=0; i<4; ++i) {
    for(var j=0; j<3; ++j) {
      t.equals(y.get(i,j), x[i][j])
    }
  }

  t.end()
})