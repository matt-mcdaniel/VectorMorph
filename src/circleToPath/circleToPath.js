import { svgns, slicePx, setAttr, clean } from '../utility/helpers';
import { append } from '../append/append';
import { remove } from '../remove/remove';

function circleToPath(circle) {

	let cx = slicePx(circle.getAttribute('cx'));
	var cy = slicePx(circle.getAttribute('cy'));
	var r = slicePx(circle.getAttribute('r'));
	var fill = circle.getAttribute('fill');
	var style = circle.getAttribute('style');

	let pathObj = document.createElementNS(svgns, 'path');
	pathObj.setAttribute("d", "M" + (cx - r).toFixed(3) + " " + cy.toFixed(3) + " A" + r.toFixed(3) + " " + r.toFixed(3) + " 0 1 0 " + (cx + r).toFixed(3) + " " + cy.toFixed(3) + " A" + r.toFixed(3) + " " + r.toFixed(3) + " 0 1 0 " + (cx - r).toFixed(3) + " " + cy.toFixed(3) + " Z");
	pathObj.setAttribute("style", style);
	pathObj.setAttribute("fill", fill);

	append(circle, pathObj);
	remove(circle);

	return pathObj;

}

export { circleToPath };