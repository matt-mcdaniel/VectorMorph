let remove = function(node) {
    let parent = node.parentNode;
    
    parent.removeChild(node);
    
    return this;
}

export { remove };