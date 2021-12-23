const lista = [
    {
        nome: 'sabao',
        preco: 30
    },
    {
        nome: 'serial',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    }
];

const saldoDisp = 100;

function calculaSaldo(saldo, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldo);
}

console.log(calculaSaldo(saldoDisp,lista));