// switch

// let expression = 'b'

// switch (expression) {   // puxa a expressão para o switch
//     case 'a':           // confere se o valor da expressão é o correto     
//         // codigo       
//         console.log('a')
//         break           // para a execução do switch apenas se verdadeiro
//     case 'b':
//         // codigo para expression b
//         console.log('b')
//         break
//     default:            // caso nenhum valor seja o correto, realizará a 
//                         //instrução dentro de si.
//         console.log('default')
//         break
// }



// Temos também a calculadora que o professor construiu no vídeo:



function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))