module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
	  // allow paren-less arrow functions
	    'arrow-parens': 0,
	    // allow async-await
	    'generator-star-spacing': 0,
	    // 禁止空格和 tab 的混合缩进
	    'no-mixed-spaces-and-tabs':0,
	    // allow debugger during development
	    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0

  },
  parserOptions: {
    parser: 'babel-eslint'
  },

  
}
