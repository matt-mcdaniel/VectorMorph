import Constants from '../settings/constants';
import Helpers from '../utility/helpers';

const svgns = Constants.svgns;
const slicePx = Helpers.slicePx;
const setAttr = Helpers.setAttr;
const clean = Helpers.clean;

export default function(circle) {
    
    let attrs = [].slice.call(circle.attributes);
    
    let cx = slicePx(circle.getAttribute('cx'));
    var cy = slicePx(circle.getAttribute('cy'));
    var r = slicePx(circle.getAttribute('r'));

    let d = `
        M ${cx} ${cy}
        m ${-r}, 0
        a ${r},${r} 0 1,0 ${(r * 2)},0
        a ${r},${r} 0 1,0 ${-(r * 2)},0
    `;
    
    // create element
    let path = document.createElementNS(svgns, 'path');
    setAttr(path, 'd', clean(d));
    setAttr(path, 'x', 0);
    setAttr(path, 'y', 0);
    setAttr(path, 'stroke', 'blue');
    setAttr(path, 'stroke-width', 2);
    
    return path;
}