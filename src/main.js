/* global Vector */
import Name from './settings/name';
import Methods from './settings/methods';
import Validate from './validate/validate';
import Morph from './morph/morph';

export default (function() {
	var context = (window || this);

	// Bind [name] to global context
	var module = context[Name] = {};

	module.validate = Validate;
	module.morph = Morph;
	console.log(module.morph, Methods);

})();

var dragon = document.getElementById('dragonPath');
var rect = document.getElementById('rect');
var circle = document.getElementById('circle');

var validated = Vector.validate(dragon, rect);
var myMorph = Vector.morph(dragon, rect);
