function subsPares(numeros){

    if(!numeros)
        return -1;    

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0)
            numeros[i] = 0;
    }

    return numeros;

}

let array = [1,2,3,5,6,9,11,20];
console.log(subsPares(array))