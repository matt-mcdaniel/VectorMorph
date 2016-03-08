import helpers from '../utility/helpers';

var setAttr = helpers.setAttr;

// https://github.com/popkinj/polymorph/blob/master/polymorph.js
let change = function(from, to){
  var svg, getLength, getMeasures, transpose, measures, newShape;
  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'polymorph-temp-canvas';
  document.body.appendChild(svg);
  /*
   ### getLength
   Get the total length of any svg string.
   @param {string} A string representation of an SVG path.
   @return {number} A numerical distance
  */
  getLength = function(it){
    var line, l;
    line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('d', it);
    svg.appendChild(line);
    l = line.getTotalLength();
    line.remove();
    return l;
  };
  /*
   ### getMeasures
   Rebuild the string node by node.
   Populating a length array as you go.
   @param path {string} SVG path
   @return {array} Array of lengths along a line
  */
  getMeasures = function(path){
    var pts, total, lengths, i$, ref$, len$, pt, tempPath, l;

    pts = path.slice(1, -1).split(/L/i);
    total = getLength(path);
    lengths = [1e-6];
    for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
      pt = ref$[i$];
      tempPath = 'M' + pts.slice(0, pt).join('L');
      l = getLength(tempPath);
      lengths.push(l / total);
    }
    return lengths;
    function fn$(){
      var i$, to$, results$ = [];
      for (i$ = 2, to$ = pts.length; i$ <= to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }
  };
  /*
   ### transpose
   Create an array of nodes positioned on the new shape.
   Their number and position are representative of the *dists* array
   @param dists {array} Array of distances along a line
   @param shape {string} Destination SVG path string
   @return {array} Array of distances along a line
  */
  transpose = function(dists, shape){
    var line, total, coords, i$, len$, l;
    line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('d', shape);
    svg.appendChild(line);
    total = getLength(shape);
    coords = [];
    for (i$ = 0, len$ = dists.length; i$ < len$; ++i$) {
      l = dists[i$];
      coords.push(line.getPointAtLength(l * total));
    }
    return coords.map(function(it){
      return it.x + "," + it.y;
    });
  };
  console.log('f:', from);
  var fromPath = from.getAttribute('d');
  var toPath = to.getAttribute('d');
  measures = getMeasures(fromPath);
  newShape = transpose(measures, toPath);
  svg.parentNode.removeChild(svg);
  
  var newD = "M" + newShape.join('L') + "Z";
  
  setAttr(from, 'd', newD);
};

export { change };