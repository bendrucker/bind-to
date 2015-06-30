'use strict'

var toArray = require('to-array')
var arity = require('util-arity')

module.exports = function bindTo (object, context) {
  var args = toArray(arguments, 2)
  for (var key in object) {
    object[key] = (function bind (self, args, value) {
      if (typeof value === 'function') {
        var bound = function bound () {
          return value.apply(self, args.concat(toArray(arguments)))
        }
        return arity(value.length, bound)
      }
      return value
    })(context, args, object[key])
  }
  return object
}
