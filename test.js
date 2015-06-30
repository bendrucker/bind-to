'use strict'

var test = require('tape')
var bind = require('./')

test('bind-to', function (t) {
  t.plan(5)
  var context = {}
  var object = {
    foo: function (a, b, c) {
      t.equal(this, context)
      t.equal(a, 0)
      t.equal(b, 1)
      t.equal(c, 2)
    },
    bar: 'baz'
  }
  bind(object, context, 0)
  var foo = object.foo
  foo(1, 2)
  t.equal(object.bar, 'baz')
})

