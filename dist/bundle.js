!function(e){function r(e,r,t){e in i||(i[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return c[e]||(c[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,s=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var s=0;s<i.dependencies.length;++s)i.dependencies[s]===o&&i.setters[s](a)}return o.locked=!1,r},r.name);o.setters=s.setters,o.execute=s.execute;for(var l=0,d=r.normalizedDeps.length;d>l;l++){var f,p=r.normalizedDeps[l],v=i[p],m=c[p];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=u(p),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[l]&&o.setters[l](f)}}}function o(e){var r={};if("object"==typeof e||"function"==typeof e)if(l){var t;for(var n in e)(t=Object.getOwnPropertyDescriptor(e,n))&&f(r,n,t)}else{var o=e&&e.hasOwnProperty;for(var n in e)(!o||e.hasOwnProperty(n))&&(r[n]=e[n])}return r["default"]=e,f(r,"__useDefault",{value:!0}),r}function a(r,t){var n=i[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,l=n.normalizedDeps.length;l>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(i[d]?a(d,t):u(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function u(e){if(v[e])return v[e];if("@node/"==e.substr(0,6))return p(e.substr(6));var r=i[e];if(!r)throw"Module "+e+" not present.";return n(i[e]),a(e,[]),i[e]=void 0,r.declarative&&f(r.module.exports,"__esModule",{value:!0}),v[e]=r.declarative?r.module.exports:r.esModule}var i={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},l=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(d){l=!1}var f;!function(){try{Object.defineProperty({},"a",{})&&(f=Object.defineProperty)}catch(e){f=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var c={},p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,v={"@empty":{}};return function(e,t,n){return function(a){a(function(a){for(var i=0;i<t.length;i++)(function(e,r){r&&r.__esModule?v[e]=r:v[e]=o(r)})(t[i],arguments[i]);n({register:r});var s=u(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)u(e[i]);return s.__useDefault?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

$__System.register('2', [], function (_export) {
  'use strict';

  var name;
  return {
    setters: [],
    execute: function () {
      name = 'Vector';

      _export('default', name);
    }
  };
});
$__System.register('3', [], function (_export) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', { 'set': 'here' });
    }
  };
});
$__System.register('4', ['3'], function (_export) {
	'use strict';

	var Set;
	return {
		setters: [function (_) {
			Set = _['default'];
		}],
		execute: function () {
			_export('default', [{
				name: 'set',
				src: Set
			}]);
		}
	};
});
$__System.register('5', [], function (_export) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect']);
		}
	};
});
$__System.register('6', ['5'], function (_export) {
	'use strict';

	var Types;
	return {
		setters: [function (_) {
			Types = _['default'];
		}],
		execute: function () {
			_export('default', function () {

				var fnPipeline = [deNest, numArgs, argType];

				try {
					var args = [].slice.call(arguments);
					fnPipeline.reduce(function (acc, fn) {
						return fn(acc);
					}, args);
					return true;
				} catch (e) {
					return console.warn('Vector Morph:', e);
				}

				function deNest(args) {
					return args.length > 1 ? args : [].slice.call(args[0]);
				}

				function numArgs(args) {
					if (!args || args.length < 2) {
						throw 'Must pass at least two arguments';
					}
					return args;
				}

				function argType(args) {
					args.forEach(function (node) {
						if (Types.indexOf(node.nodeName) === -1) {
							throw 'Element must be of type ' + Types;
						}
					});
					return args;
				}
			});
		}
	};
});
$__System.register('7', ['1', '4', '6'], function (_export) {
	'use strict';

	var Main, Methods, Validate;
	return {
		setters: [function (_3) {
			Main = _3['default'];
		}, function (_) {
			Methods = _['default'];
		}, function (_2) {
			Validate = _2['default'];
		}],
		execute: function () {
			_export('default', function () {
				if (!Validate(arguments)) {
					return false;
				}

				var nodes = [].slice.call(arguments);

				Methods.forEach(function (method) {

					console.log('bind ', method, 'to ', window || this);

					return; // some function
				});
			});

			;
		}
	};
});
$__System.register('1', ['2', '4', '6', '7'], function (_export) {
	/* global Vector */
	'use strict';

	var Name, Methods, Validate, Morph, dragon, rect, circle, validated, myMorph;
	return {
		setters: [function (_) {
			Name = _['default'];
		}, function (_2) {
			Methods = _2['default'];
		}, function (_3) {
			Validate = _3['default'];
		}, function (_4) {
			Morph = _4['default'];
		}],
		execute: function () {
			_export('default', (function () {
				var context = window || this;

				// Bind [name] to global context
				var module = context[Name] = {};

				module.validate = Validate;
				module.morph = Morph;
				console.log(module.morph, Methods);
			})());

			dragon = document.getElementById('dragonPath');
			rect = document.getElementById('rect');
			circle = document.getElementById('circle');
			validated = Vector.validate(dragon, rect);
			myMorph = Vector.morph(dragon, rect);
		}
	};
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map