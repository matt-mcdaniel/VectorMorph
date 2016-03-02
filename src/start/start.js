import Types from '../settings/types';

export default function(property, value) {
    
    var pipeline = [
        getPaths,
    ];
    
    this.nodes = pipeline.reduce(function(acc, fn) {
        return fn(acc);
    }, this.nodes);
    
    function getPaths(nodes) {
        return nodes.map(function(node) {
            let path = Types[node.nodeName].convertToPath(node);
            return Object.defineProperties({}, {
                'node': {
                    value: node
                },
                'path': {
                    value: path
                },
                'nodeType': {
                    value: node.nodeName
                },
                'parent': {
                    value: node.parentNode
                }
            });
        })
    }

    return this;
}