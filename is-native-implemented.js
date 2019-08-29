// Exports true if environment provides native `Symbol` implementation

'use strict';

var Symbol = require('./native-symbol')();

module.exports = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
