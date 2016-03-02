function slicePx(value) {
    return +value.slice(0, value.length - 2);
}

function setAttr(node, attr, val) {
    node.setAttributeNS(null, attr, val);
    return node;
}

function clean(str) {
    var regEx = [
        [/\\n/gi, ''],
    ];
    
    let reduced = regEx.reduce(function(acc, reg) {
        return acc.replace(reg[0], reg[1]);
    }, str);
    
    return reduced;
}

export default {
    slicePx: slicePx,
    setAttr: setAttr,
    clean: clean
}