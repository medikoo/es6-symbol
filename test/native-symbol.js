'use strict';

var global       = require('es5-ext/global')
  , Symbol = require('../native-symbol');

module.exports = function (t, a) { a(Symbol, global.Symbol); };
