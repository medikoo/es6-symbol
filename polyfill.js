'use strict';

var create = Object.create, defineProperties = Object.defineProperties
  , d, generateName, Symbol;

d = function (value, o) {
  o = o || {};
  return {
    value: value,
    configurable: o.c || false,
    writable: o.w || false,
    enumerable: o.e || false
  };
};

generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		return '@@' + desc;
	};
}());

module.exports = Symbol = function (description) {
	var symbol;
	if (this instanceof Symbol) {
		throw new TypeError('TypeError: Symbol is not a constructor');
	}
	symbol = create(Symbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d(description),
		__name__: d(generateName(description))
	});
};

Object.defineProperties(Symbol, {
	create: d(Symbol('create')),
	hasInstance: d(Symbol('hasInstance')),
	isConcatSpreadable: d(Symbol('isConcatSpreadable')),
	isRegExp: d(Symbol('isRegExp')),
	iterator: d(Symbol('iterator')),
	toPrimitive: d(Symbol('toPrimitive')),
	toStringTag: d(Symbol('toStringTag')),
	unscopables: d(Symbol('unscopables'))
});

defineProperties(Symbol.prototype, {
	properToString: d(function () {
		return 'Symbol (' + this.__description__ + ')';
	}),
	toString: d(function () { return this.__name__; })
});
Object.defineProperty(Symbol.prototype, Symbol.toPrimitive, d(
	function (hint) {
		throw new TypeError("Conversion of symbol objects is not allowed");
	}));
Object.defineProperty(Symbol.prototype, Symbol.toStringTag, d('Symbol', { c: true }));
