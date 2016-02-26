var module = {};

module.Morph = function() {
	init(arguments);

	// var a = svgOne;
	// var b = svgTwo;
}

function init() {
	var args = arguments[0];

	var pipeline = [
		numArgs,
		argType
	];

	try {

      pipeline.reduce(function (acc, fn) {
        return fn(acc);
      }, args);

	} catch(e) {

		console.warn('VectorMorph:', e);

	}
}

function numArgs() {
	if (arguments[0].length < 2) {
		throw 'Must pass at least two arguments';
	}
}

function argType() {
	// make sure type SVG
}

function getArgs() {
	return [].slice.call(arguments);
}


module.Morph('hi', 'there');