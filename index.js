'use strict';

var Symbol = require('./native-symbol')();

module.exports = require('./is-implemented')() ? Symbol : require('./polyfill');
