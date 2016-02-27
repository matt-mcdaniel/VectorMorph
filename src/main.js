!(function() {
	'use strict';

	var global = this || window;

	var module = {};

	module.morph = function() {
		var args = [].slice.call(arguments);
		validate(args);

		//var nodes = convertToPath(args);


	}

	// attach module to window object
	global.Vector = module;

})();

// helper functions
function validate(args) {
	var pipeline = [numArgs, argType];
	try {
		pipeline.reduce(function(acc, fn) {
			return fn(acc);
		}, args);
	} catch (e) {
		return console.warn('Vector Morph:', e);
	}
}

function numArgs(args) {
	if (!args || args.length < 2) {
		throw 'Must pass at least two arguments';
	}
	return args;
}

function argType(args) {
	var types = ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect'];
	args.forEach(function(node) {
		if (types.indexOf(node.nodeName) === -1) {
			throw 'Element must be of type ' + types;
		}
	});
	return args;
}
