import Methods from '../settings/methods.js';
import Validate from '../validate/validate';
import Append from '../append/append';

export default function() {
	if (!Validate(arguments)) { return false; }
    
    const nodes = [].slice.call(arguments);
    
    const morphObject = { nodes };
    
    Methods.forEach(function(method) {
        morphObject[method.name] = method.src;
    });
    
    
    Append(morphObject.nodes);
    console.info('morphObject:', morphObject);
    
    return morphObject;

};
