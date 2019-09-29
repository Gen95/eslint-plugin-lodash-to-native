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
    fixable: "code", // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "_" && node.property.name === "map") {
          context.report({
            node,
            message: "Can be switched to native .map",
            fix: function(fixer) {
              /**
               * node is MemberExpression (_.isNull or _.isUndefined)
               * node.parent is CallExpression (_.isNull() or _.isUndefined())
               */
      
              let scope = node.parent;
      
              // Grab the argument that was passed to the isNull function
              const array = scope.arguments[0];
              const foo = scope.arguments[1];
      
              // Get an instance of `SourceCode` so we can convert the argument to source code
              // & append the fix to it
              const sourceCode = context.getSourceCode();
              let fixedCode = `${sourceCode.getText(array)}.map(${sourceCode.getText(foo)})`;
      
              return fixer.replaceText(scope, fixedCode);
            }
          });
        }
      }
    }
  }
}