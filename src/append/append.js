let append = function(oldObj, newPath) {
    let parentNode = oldObj.parentNode;
    
    parentNode.appendChild(newPath);
    
    return this;
}

export { append }