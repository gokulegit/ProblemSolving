var isCompleteTree = function(root) {
    let q = [root];
    let foundnull = false;
    while(q.length > 0) {
        let curnode = q.shift();
        if(curnode === null) {
            foundnull = true;
        }
        else {
            if(foundnull) return false;
            q.push(curnode.left);
            q.push(curnode.right);
        }
    }
    return true;
};
