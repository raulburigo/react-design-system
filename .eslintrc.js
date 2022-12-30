module.exports = {
  env: {
    jest: true,
    node: true,
    es2021: true,
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    camelcase: 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/style-prop-object': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] }
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  },
};
