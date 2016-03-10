import circle from '../circleToPath/circleToPath';

let empty = function() {};

export default {
    circle: {
        name: 'circle',
        convertToPath: circle
    },
    ellipse: {
        name: 'ellipse',
        convertToPath: empty
    },
    line: {
        name: 'line',
        convertToPath: empty
    },
    path: {
        name: 'path',
        convertToPath: empty
    },
    polygon: {
        name: 'polygon',
        convertToPath: empty
    },
    polyline: {
        name: 'polyline',
        convertToPath: empty
    },
    rect: {
        name: 'rect',
        convertToPath: empty
    }
}
