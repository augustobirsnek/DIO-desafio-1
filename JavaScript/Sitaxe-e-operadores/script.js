/*
-Crie uma função que recebe dois números como parâmetros.
-Confira se os números são iguais.
-Confira se a soma dos números é maior que 10 ou menor que 20.
-Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/

function numeros(num1, num2){
    const frase1 = comparaNumeros(num1, num2);
    const frase2 = soma(num1,num2);

    return frase1+' '+frase2;
}

function comparaNumeros(num1, num2){
    if(num1 == num2){
        return 'Os números '+num1+' e '+num2+' são iguais.';
    }
    return 'Os números '+num1+' e '+num2+' não são iguais.';
}

function soma(num1,num2){
    let resultado = num1 + num2;
    let frase1 = 'Sua soma é '+resultado;
    let dez = (resultado > 10) ? 'maior':'menor';
    let vinte = (resultado > 20) ? 'maior':'menor';
    
    return frase1+', que é '+dez+' que 10 e '+vinte+' que 20';

}

console.log(numeros(10,10));