// Exports true if environment provides native `Symbol` implementation

'use strict';

var global = require('es5-ext/global')

  , Symbol = global.Symbol;

module.exports = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
