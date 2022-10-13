const getTheTitles = function(array) {
    const tiles = [];
    for (const obj of array){
        const tileItem = obj.title;
        tiles.push(tileItem)
    }
    return tiles
};

// Do not edit below this line
module.exports = getTheTitles;
