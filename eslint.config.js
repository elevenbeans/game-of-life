const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  { ignores: ['src/vendor/**'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.amd,
        $: 'readonly',
        define: 'readonly',
        require: 'readonly',
        restfulApi: 'readonly'
      }
    },
    rules: {
      'indent': ['error', 2],
      'camelcase': ['error', { properties: 'never' }],
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      'semi': ['error', 'always'],
      'eqeqeq': ['error', 'always'],
      'no-extra-boolean-cast': 'error',
      'no-console': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'consistent-this': ['error', 'that'],
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'max-depth': ['error', { max: 4 }],
      'max-len': ['error', { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
      'max-lines': ['error', { max: 600, skipBlankLines: true, skipComments: true }],
      'max-params': ['error', { max: 4 }],
      'max-statements-per-line': ['error', { max: 2 }],
      'max-statements': ['warn', { max: 16 }],
      'new-cap': 'error',
      'no-array-constructor': 'error',
      'no-multiple-empty-lines': ['error', { max: 2 }],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', { var: 'never', let: 'never', const: 'never' }],
      'padded-blocks': ['error', 'never'],
      'quote-props': ['error', 'consistent'],
      'semi-spacing': ['error', { before: false, after: true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'space-unary-ops': 'error',
      'space-in-parens': 'error',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
