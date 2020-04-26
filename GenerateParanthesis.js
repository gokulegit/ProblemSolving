/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = []
    
    const generate = (open, close, string) => {
        if(open == n && close == n) {
            answer.push(string);
            return;
        }
        if(open < n) generate(open+1, close, string+"(");
        if(open > close) generate(open, close+1, string+")");
    }
    
    generate(0, 0, "");
    
    return answer ;
};
