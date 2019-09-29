/**
 * @fileoverview Plugin finds a usage of lodash function "_.map"
 * and suggests change it to native" Array#map"
 * @author Evgeny Trushkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/lib/rules");



