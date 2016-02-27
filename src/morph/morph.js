import Methods from '../settings/methods.js';
import Validate from '../validate/validate';
import Main from '../main';

export default function() {
	if (!Validate(arguments)) { return false; }

	var nodes = [].slice.call(arguments);

	Methods.forEach(function(method) {

		console.log('bind ', method, 'to ', window || this);

		return // some function
	});

};
