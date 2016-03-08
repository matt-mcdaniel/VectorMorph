import Validate from '../validate/validate';
import { append } from '../append/append';
import { circleToPath } from '../circleToPath/circleToPath';
import { remove } from '../remove/remove';
import { change } from '../change/change';

export default function() {
	if (!Validate(arguments)) { return false; }
    
    const nodes = [].slice.call(arguments);
    console.log(nodes);
    
    let newPath = circleToPath(nodes[0]);
    
    append(nodes[0], newPath);
    remove(nodes[0]);
    let thing = change(newPath, nodes[1]);
    console.log(thing);

};
