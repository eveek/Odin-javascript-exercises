const fibonacci = function(n) {
    const num = parseFloat(n)
    if(num < 0) return "OOPS"
    if(num === 1) num;
    
    
    const result = [0, 1];
    
    for (let i = 2; i <= num; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }
    
    return result[result.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
