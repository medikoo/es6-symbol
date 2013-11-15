'use strict';

var d = require('d/d')

  , defineProperties = Object.defineProperties
  , generateName, Symbol;

generateName = (function () {
	var created = Object.create(null);
	return function (desc) {
		var postfix = 0;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		return '@@' + desc;
	};
}());

module.exports = Symbol = function (description) {
	if (!(this instanceof Symbol)) return new Symbol(description);
	description = (description === undefined ? '' : String(description));
	return defineProperties(this, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};

Object.defineProperties(Symbol, {
	create: d('', new Symbol('create')),
	hasInstance: d('', new Symbol('hasInstance')),
	isConcatSpreadable: d('', new Symbol('isConcatSpreadable')),
	isRegExp: d('', new Symbol('isRegExp')),
	iterator: d('', new Symbol('iterator')),
	toPrimitive: d('', new Symbol('toPrimitive')),
	toStringTag: d('', new Symbol('toStringTag')),
	unscopables: d('', new Symbol('unscopables'))
});

defineProperties(Symbol.prototype, {
	properToString: d(function () {
		return 'Symbol (' + this.__description__ + ')';
	}),
	toString: d('', function () { return this.__name__; })
});
Object.defineProperty(Symbol.prototype, 'originalToString', d(function () {
	return 'Symbol (' + this.__description__ + ')';
}));
Object.defineProperty(Symbol.prototype, Symbol.toPrimitive, d('',
	function (hint) {
		throw new TypeError("Conversion of symbol objects is not allowed");
	}));
Object.defineProperty(Symbol.prototype, Symbol.toStringTag, d('c', 'Symbol'));
