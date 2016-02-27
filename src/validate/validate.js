import Types from '../settings/types';

export default function() {

	var fnPipeline = [
		deNest,
		numArgs,
		argType
	];

	try {
		var args = [].slice.call(arguments);
		fnPipeline.reduce(function(acc, fn) {
			return fn(acc);
		}, args);
		return true;
	} catch (e) {
		return console.warn('Vector Morph:', e);
	}

	function deNest(args) {
		return args.length > 1 ? args : [].slice.call(args[0]);
	}

	function numArgs(args) {
		if (!args || args.length < 2) {
			throw 'Must pass at least two arguments';
		}
		return args;
	}

	function argType(args) {
		args.forEach(function(node) {
			if (Types.indexOf(node.nodeName) === -1) {
				throw 'Element must be of type ' + Types;
			}
		});
		return args;
	}

}