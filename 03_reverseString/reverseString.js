const reverseString = function(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    if(string == " "){
        return " ";
    } else{
        return joinArray;
    }
};

// Do not edit below this line
module.exports = reverseString;
