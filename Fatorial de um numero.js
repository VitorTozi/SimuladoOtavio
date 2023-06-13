// Script ppara calcular fatorial de um numero 

// pega a entrada do usuário
const number = parseInt(prompt('Insira um número inteiro positivo: '));

//verificando se o número é negativo
if (number < 0) {
    console.log('Erro! Fatorial para número negativo não existe.');
}

// se o número for 0
else if (number === 0) {
    console.log(`O fatorial de ${number} é 1.`);
}

// se o numero for positivo
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`O fatorial de ${number} é ${fact}.`);
}