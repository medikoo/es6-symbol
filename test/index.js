'use strict';

var d = require('d/d')

  , defineProperty = Object.defineProperty;

module.exports = function (T, a) {
	var symbol = new T('test'), x = {};
	defineProperty(x, symbol, d('foo'));
	a(x.test, undefined, "Name");
	a(x[symbol], 'foo', "Get");
};
