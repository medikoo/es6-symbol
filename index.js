'use strict';

var Symbol = require('./native-symbol.js');

module.exports = require('./is-implemented')() ? Symbol : require('./polyfill');
