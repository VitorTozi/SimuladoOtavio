// programa para inverter uma string

function reverseString(str) {

    // string vazia
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// pega a entrada do usuário
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);