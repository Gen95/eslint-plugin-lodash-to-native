/**
 * @fileoverview Plugin finds a usage of lodash function "_.map"
 * and suggests change it to native" Array#map"
 * @author Evgeny Trushkin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
      type: 'suggestion',
  
      docs: {
        description: 'Plugin finds a usage of lodash function "_.map " and suggests change it to native "Array#map"',
        category: 'Fill me in',
        recommended: false,
      },
      fixable: null, // or "code" or "whitespace"
      schema: [
        // fill in your schema
      ],
    },
  
    create(context) {
        const countOptions = {
            count: 5,
            includeComments: false,
            filter: null
        }
        const sourceCode = context.getSourceCode();
        if (sourceCode.getFirstTokens(node, countOptions) === "_.map") {
  
            return (Array.isArray(collection)) ?
                collection.map(fn):
                _.map(collection, fn);
        }
    }
}