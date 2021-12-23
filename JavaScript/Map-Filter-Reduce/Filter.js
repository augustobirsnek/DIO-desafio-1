function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const nums = [1,2,3,4,5,8,11,20];

console.log(filtraPares(nums));