const palindromes = function (string) {
    const newString = string.toLowerCase().split("");
    const filterStr = newString.filter(subString => {
        if(subString === " " || subString === "," || subString === "!" || subString === "."){
            return false
        }else{return true}
    })
    const normStr = filterStr.join("") 
    const reverseStr = filterStr.reverse().join("") 
    return normStr === reverseStr ? true: false;
};

// Do not edit below this line
module.exports = palindromes;
