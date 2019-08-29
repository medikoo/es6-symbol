'use strict';

var global = require('es5-ext/global');

module.exports = function (t, a) { a(t(), global.Symbol); };
