var longestUnivaluePath = function(root) {
    let maxlen = 0;

    const find = (node, parentVal) =>{
        if(!node) return 0;
        if(!node.left && !node.right) {
            return node.val == parentVal ? 1: 0;
        }
        
        let left = find(node.left, node.val);
        let right = find(node.right, node.val);
        
        maxlen = Math.max(maxlen, left+right)
        
        if(node.val == parentVal) {
            return 1 + Math.max(left, right);
        }
        else return 0;
    }
    find(root, -1);
    
    return maxlen;
    
};
