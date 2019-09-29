/**
 * @fileoverview Plugin finds a usage of lodash function "_.map " and suggests change it to native "Array#map"
 * @author Evgeny Trushkin
 */

'use strict';

let rule = require('../../../lib/rules/map');

    var {RuleTester} = require("eslint");

let ruleTester = new RuleTester();
let errorObject = {
  message: 'Can be switched to native .map',
  type: 'MemberExpression',
};
ruleTester.run('lodash-to-native', rule, {

  valid: [
    'var testVar; testVar === null',
  ],

  invalid: [
    {
      code: '_.map()',
      errors: [errorObject],
    },
  ],
});

