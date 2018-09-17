module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    "react/jsx-one-expression-per-line": "none",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "globals": {
    "document": false
  },
};