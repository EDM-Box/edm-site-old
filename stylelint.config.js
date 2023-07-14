// @ts-check

/**
 * @type {import('stylelint').Config}
 **/

module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
  rules: {
    "string-quotes": "double",
    "selector-id-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      {
        message: "Expected custom property name to be lowerCamelCase",
      },
    ],
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      {
        message: "Expected custom property name to be lowerCamelCase",
      },
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["/grid/"],
      },
    ],
  },
};
