const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if(firstNumber < 0 || secondNumber < 0){
        return "ERROR"
    }
    if(typeof firstNumber !== "number" || typeof secondNumber !== "number"){
        return "ERROR"
    }
    if(firstNumber > secondNumber){
        const temp = secondNumber;
        secondNumber = firstNumber;
        firstNumber = temp;

    }

    for (let i = firstNumber; i <= secondNumber; i++){
    sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
