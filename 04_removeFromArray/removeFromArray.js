const removeFromArray = function(Array, ...args) {
    let newArray = []
    for(const item of Array){
        if(!args.includes(item)){
            newArray.push(item);  
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
