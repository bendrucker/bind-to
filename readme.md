# bind-to [![Build Status](https://travis-ci.org/bendrucker/bind-to.svg?branch=master)](https://travis-ci.org/bendrucker/bind-to) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/bind-to.svg)](https://greenkeeper.io/)

> Bind all methods in an object to a specified context and arguments

## Install

```
$ npm install --save bind-to
```

## Usage

```js
var bind = require('bind-to')
var object = {
  foo: function () {
    return this.bar
  }
}
var context = {
  bar: 'baz'
}
bind(object, context)
object.foo() // => 'baz'
```

## API

#### `bind(object, context, args...)` -> `object`

Returns the original object for convenience.

##### object

*Required*  
Type: `object`

The object to bind.

##### context

*Required*  
Type: `any`

The `this` value to bind to.

##### args...

Variadic arguments to apply to the methods.

## License

MIT © [Ben Drucker](http://bendrucker.me)
