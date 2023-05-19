const { on } = require("events");

module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		// 新增
		"node": true,
	},
	"extends": [
		"eslint:recommended",
		"@antfu",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"./.eslintrc-auto-import.json"
	],
	"overrides": [
	],
	// 修改
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"sourceType": "module",
	},
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		// 要求使用分号
		"semi": "error",
		// 检测重复分号
		"no-extra-semi": "error",
		// 要求使用 let 或 const 而不是 var
		"no-var": "error",
		// 使用 let 声明，但在初始化赋值后从未被修改过的变量
		"prefer-const": "error",
		// 禁止出现多个空格
		'no-multi-spaces': "error",
		// 箭头函数参数只有一个时，不允许写圆括号(always, as-needed)
		'arrow-parens': ['error', 'always'],
		// 要求箭头函数的=>前后有空格
    'arrow-spacing': 'error',
		// 要求使用 === 和 !==
		"eqeqeq": ["error", "always"],
		// 对象字面量中的拖尾逗号
		"comma-dangle": ["error", "only-multiline"],
		// 关闭eslint检查文件名是否为驼峰命名
		"vue/multi-word-component-names": "off",
		// 
		"no-console": "off"
	},
}
