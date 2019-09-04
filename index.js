"use strict";

var global = require("es5-ext/global");

module.exports = require("./is-implemented")() ? global.Symbol : require("./polyfill");
