/**
 * For rules that must be enabled for ts files only
 */
exports.createOverrideForJsFiles = rules => Object
  .keys(rules)
  .reduce((ruleset, rule) => ({ ...ruleset, [rule]: 0 }), {})

/**
 * For rules where base eslint rules must be disabled
 */
exports.createExtensionRules = rules => Object
  .entries(rules)
  .reduce((ruleset, [rule, value]) => ({
    ...ruleset,
    [rule]: 0,
    [`@typescript-eslint/${rule}`]: value,
  }), {})
