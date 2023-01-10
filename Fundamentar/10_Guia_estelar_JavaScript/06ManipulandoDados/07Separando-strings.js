// Manipulando Strings e Arrays


/*  
    Separe um texto que contem espaços, em um novo  array onde 
    cada texto é uma posição do array. Depois disso, transforme 
    o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o Amor!"                       // Criando a frase
let myArray = phrase.split(" ")                             // Transformando de string p/ Array através do split
let phraseWithUnderscore = myArray.join("_")                // Transformando de Array p/ String através do join   

console.log(phraseWithUnderscore.toLocaleUpperCase())