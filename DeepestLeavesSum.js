var deepestLeavesSum = function(root) {
    
    let sum = 0;
    let maxDepth = 0;
    
    const recurse = (node, depth) => {
        if(!node) return;
        if(!node.left && !node.right) {
            if(depth+1 == maxDepth) {
                sum += node.val;
            }
            else  if(depth+1 > maxDepth) {
                maxDepth = depth+1
                sum = node.val;
            }
        }
        recurse(node.left, depth+1);
        recurse(node.right, depth+1);
    }
    
    recurse(root, 0);
    
    return sum;
    
};
