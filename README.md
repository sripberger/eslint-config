# @sripberger/eslint-config
This package contains
[sharable configuration](https://eslint.org/docs/developer-guide/shareable-configs)
files for [ESLint](https://eslint.org/), to be used for my personal JS projects.
Feel free to use it in your own projects if you like, though I'll of course be
prioritizing my own needs when maintaining it.

Two configs are included:

- `index.js`: To be used for all JS files.
- `test.js`: To be used for test files.

## Base Rules
Most rules contained in this configuration are described in the
[ESLint rules docs](https://eslint.org/docs/rules/).

## JSDoc Rules
Some rules in this package rely on the
[`eslint-plugin-jsdoc`](https://www.npmjs.com/package/eslint-plugin-jsdoc)
plugin, which must be installed alongside ESLint. They are described in the
README for that project, and they have to do specifically with formatting of
JSDoc comments.
