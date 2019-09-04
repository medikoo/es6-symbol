# es6-symbol

## ECMAScript 6 Symbol polyfill

For more information about symbols see following links

- [Symbols in ECMAScript 6 by Axel Rauschmayer](http://www.2ality.com/2014/12/es6-symbols.html)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Specification](https://tc39.github.io/ecma262/#sec-symbol-objects)

### Limitations

Underneath it uses real string property names which can easily be retrieved, however accidental collision with other property names is unlikely.

### Usage

If you'd like to use native version when it exists and fallback to [ponyfill](https://ponyfill.com) if it doesn't, use _es6-symbol_ as following:

```javascript
var Symbol = require("es6-symbol");
```

If you want to make sure your environment implements `Symbol` globally, do:

```javascript
require("es6-symbol/implement");
```

If you strictly want to use polyfill even if native `Symbol` exists (hard to find a good reason for that), do:

```javascript
var Symbol = require("es6-symbol/polyfill");
```

#### API

Best is to refer to [specification](https://tc39.github.io/ecma262/#sec-symbol-objects). Still if you want quick look, follow examples:

```javascript
var Symbol = require("es6-symbol");

var symbol = Symbol("My custom symbol");
var x = {};

x[symbol] = "foo";
console.log(x[symbol]);
("foo");

// Detect iterable:
var iterator, result;
if (possiblyIterable[Symbol.iterator]) {
  iterator = possiblyIterable[Symbol.iterator]();
  result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
}
```

### Installation

#### NPM

In your project path:

    $ npm install es6-symbol

##### Browser

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

## Tests [![Build Status](https://travis-ci.org/medikoo/es6-symbol.png)](https://travis-ci.org/medikoo/es6-symbol)

    $ npm test

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-es6-symbol?utm_source=npm-es6-symbol&utm_medium=referral&utm_campaign=readme">Get professional support for d with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
