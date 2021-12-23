function somaArray (array) {
    return array.reduce(function(prev, current){
        return prev + current;
    });
}

const nums = [1,2,3,4,5];

console.log(somaArray(nums));