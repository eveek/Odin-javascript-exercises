const repeatString = function(string, number) {
    let addString = "";
    for(let i = 1; i <= number; i++){
        addString += string;
    }
    if(number < 0){
        return "ERROR"
    }else{

        return addString;
    }
};

// Do not edit below this line
module.exports = repeatString;
