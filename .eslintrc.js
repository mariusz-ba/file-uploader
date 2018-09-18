module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    "react/jsx-one-expression-per-line": "none",
    "react/forbid-prop-types": false,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
    "no-underscore-dangle": ["error", {"allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "globals": {
    "document": false
  },
  "parser": "babel-eslint",
};