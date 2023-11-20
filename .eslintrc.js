module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
  rules: {
    'no-anonymous-exports-page-templates': 'off',
    'limited-exports-page-templates': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};
