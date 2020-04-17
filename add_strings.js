
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = []
    
    let carry = 0;
    
    while(i >= 0 || j >= 0) {
        let a = num1[i] ? num1[i--].charCodeAt(0) - '0'.charCodeAt(0) : 0;
        let b = num2[j] ? num2[j--].charCodeAt(0) - '0'.charCodeAt(0) : 0;
        
        let sum = a + b + carry;
        carry = sum > 9? 1: 0;
        
        result.unshift(sum%10);
        
    }
    
    if(carry>0) result.unshift(carry);
    
    return result.join('');
};
