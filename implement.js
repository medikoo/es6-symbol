'use strict';

if (!require('./is-implemented')()) {
	Object.defineProperty(window, 'Symbol',
		{ value: require('./polyfill'), configurable: true, enumerable: false,
			writable: true });
}
