const
	babel = require('broccoli-babel-transpiler'),
	funnel = require('broccoli-funnel'),
	jade = require('broccoli-jade'),
	mason = require('broccoli-mason'),
	mergeTrees = require('broccoli-merge-trees'),
	stylus = require('broccoli-stylus')

const
	funnelTo = (tree, dest) => funnel(tree, { srcDir: '/', destDir: dest  }),
	filterByExt = (tree, ext) => funnel(tree, { include: [`**/*.${ext}`] })

module.exports = mergeTrees([
	// https://github.com/sindresorhus/broccoli-jade#a-note-about-include-paths
	funnel(
		jade(funnel('assets/view', { srcDir: '/', destDir: 'assets/view', exclude: ['lib.jade'] })),
		{ srcDir: 'assets/view', destDir: '/' }),
	stylus(filterByExt('assets', 'styl')),
	babel(filterByExt('assets', 'js'), {
		modules: 'amd',
		whitelist: [ 'es6.destructuring', 'es6.modules', 'es6.parameters', 'strict' ]
	}),
	mason(filterByExt('assets', 'ms'), {
		forceNonLazyModule: true,
		includeAmdefine: false
	}),
	funnelTo('assets/image', 'image'),
	funnelTo('assets/sound', 'sound'),
	funnelTo('bower_components', 'lib')
])
