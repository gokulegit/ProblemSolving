var minCameraCover = function(root) {
    
    const nothing = 0;
    const leaf = 1;
    const covered = 2;
    const pleasecoverme = 3;
    const hascamera = 4;
    
    let noofcameras = 0;
    
    const util = node => {
        if(!node) return nothing;
        if(!node.left && !node.right) return leaf;
        
        let left = util(node.left);
        let right = util(node.right);
        
        if(left == leaf || right == leaf || left == pleasecoverme ||
           right == pleasecoverme) {
            noofcameras++;
            return hascamera;
        }
        
        if(left == hascamera || right == hascamera)  return covered;
        
        return pleasecoverme;
    }
    
    let rootstate = util(root);
    if(rootstate == pleasecoverme || rootstate == leaf) {
        noofcameras++;
    }
    return noofcameras;
};
