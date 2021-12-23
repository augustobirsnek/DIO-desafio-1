function validaErro(array, num){
    try{
        if(!array && !num) throw new ReferenceError("Envie os parametros!");

        if(typeof array !== 'object') throw new TypeError("O array precisa ser do tipo objeto!");

        if(typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo numero!");

        if(array.length !== num) throw new RangeError("Tamanho do array invalido!");
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.name);
            console.log(e.message);
            //console.log(e.stack);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.name);
            console.log(e.message);
            //console.log(e.stack);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.name);
            console.log(e.message);
            //console.log(e.stack);
        }
        else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }

    return array;
}

console.log(validaErro([1,2],2));