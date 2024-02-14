module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: {
    'lodash/import-scope': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-warning-comments': [
      'error',
      {
        terms: ['fixme'],
        location: 'start',
      },
    ],
  },
  globals: {
    _: true,
  },
};
