// pega a entrada do usuário
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// verifica se numero é igual a 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// verifica se o número é maior que 1
else if (number > 1) {

    // percorrendo 2 até o número-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} é um número primo`);
    } else {
        console.log(`${number} é um número não primo`);
    }
}

// verifica se o número é menor que 1
else {
    console.log(" número não é primo numbTheer.");
}