// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			angular.configs.tsRecommended,
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname,
			},
		},
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/component-class-suffix': [
				'error',
				{
					suffixes: ['Component'],
				},
			],
			'@angular-eslint/directive-class-suffix': [
				'error',
				{
					suffixes: ['Directive'],
				},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: ['c', 'app'],
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: ['c', 'app'],
					style: 'kebab-case',
				},
			],
		},
	},
	{
		files: ['**/*.html'],
		extends: [
			angular.configs.templateRecommended,
			angular.configs.templateAccessibility,
		],
		rules: {},
	},
]);
