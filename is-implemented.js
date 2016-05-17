'use strict';

var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }
	if ((typeof Symbol.iterator === 'symbol') &&
			(typeof Symbol.toPrimitive === 'symbol') &&
			(typeof Symbol.toStringTag === 'symbol')) {
		return true;
	}

	// Return 'true' for polyfills
	if (!validTypes[typeof Symbol.isConcatSpreadable]) return false;
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;
	if (!validTypes[typeof Symbol.unscopables]) return false;

	return true;
};
