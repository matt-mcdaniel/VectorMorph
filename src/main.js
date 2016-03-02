/* global Vector */
import Name from './settings/name';
import Methods from './settings/methods';
import Validate from './validate/validate';
import Morph from './morph/morph';

const library = {
    name: Name,
    version: '0.0.0',
    morph: Morph
}

Methods.forEach(function(method) {
    library[method.name] = method.src
});

window[Name] = (function() { return library; })();

// testing
console.log('* global object:', Vector);

var dragon = document.getElementById('dragonPath');
var circle = document.getElementById('circle');
var rect = document.getElementById('rect');

var myMorph = Vector
    .morph(dragon, circle)
    .set('timing', 'slow');
    


myMorph.start();
