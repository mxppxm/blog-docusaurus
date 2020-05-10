module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:react/recommended",
    "google",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 11,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "require-jsdoc": "off",
    "indent": ["error", 2,
      {
        "SwitchCase": 1,
      },
    ],
    "no-multiple-empty-lines": ["error",
      {
        "max": 1,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error",
      { "allowAllPropertiesOnSameLine": true },
    ],
    "react/jsx-curly-spacing": [2, { "when": "always", "children": true }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }],
    "react/jsx-tag-spacing": ["error", {
      "beforeClosing": "allow",
    }],
    "max-len": ["error", { "code": 100 }],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
      },
    ],
    "space-infix-ops": "error",
  },
};
