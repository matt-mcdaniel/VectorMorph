import validate from '../validate/validate';
import { append } from '../append/append';
import { circleToPath } from '../circleToPath/circleToPath';
import { remove } from '../remove/remove';
import { change } from '../change/change';
import { interpolate } from 'd3-interpolate';
import { setAttr } from '../utility/helpers';

export default function() {
	if (!validate(arguments)) { return false; }

    const nodes = [].slice.call(arguments);

    let fromNode = circleToPath(nodes[0], nodes[1]);
	 let path0 = fromNode.getAttribute('d');
	 let n0 = fromNode.getTotalLength();

	 let toNode = nodes[1];
	 let path1 = toNode.getAttribute('d');
	 let n1 = toNode.getTotalLength();


	 console.log(interpolate, n0, n1);

	 let fromPathData = fromNode.getPathData();
	 let toPathData =  toNode.getPathData();

	 var tween = {
		 startTime: Date.now(),
		 startVal: path0,
		 endVal: path1,
		 duration: 1000,
	 }


	 var tweenFn = interpolate(path0, path1);


	 function loop() {
		 // get current time
		 var t = Date.now() - tween.startTime;
		 // make the updates
		 if (t <= tween.duration) {
			 var val = tweenFn(t);
			 setAttr(fromNode, 'd', val);
		 }

		 requestAnimationFrame(loop);
	 }

	 loop();

};
