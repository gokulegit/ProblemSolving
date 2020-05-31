var uniquePaths = function(m, n) {
    let recur = (i, j) => {
        if(i>m || j > n) return 0;
        if(i == m && j == n) return 1;
        let fromRight = recur(i, j+1);
        let fromBottom = recur(i+1, j);
        
        return fromRight + fromBottom;
    }
    
    let dpmethod_using_2darray = (m, n) => {
        let dp = new Array(m);
        for(let i=0;i<m;i++) {
            dp[i] = new Array(n).fill(1);
        }
        for(let i=1;i<m;i++) {
            for(let j=1;j<n;j++) {
                dp[i][j] = dp[i][j-1] + dp[i-1][j]
            }
        }
        return dp[m-1][n-1];
    }
    
    let dpmethod_using_only2rows = (m, n) => {
        let prev = new Array(n).fill(1);
        let cur = [...prev];
        for(let i=1;i<m;i++) {
            for(let j=1;j<n;j++) {
                cur[j] = cur[j-1] + prev[j]
            }
            prev = [...cur]
        }
        return cur[n-1];
    }
    
    let dpmethod = (m, n) => {
        let cur = new Array(n).fill(1);
        
        for(let i = 1; i<m;i++) {
            for(let j=1; j<n;j++) {
                cur[j] = cur[j-1] + cur[j];
            }
        }
        
        return cur[n-1];
        
    }
    
    return dpmethod(m,n);
};
