//Arrays

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(alphabet)

//push
let alphabet2 = alphabet.push('H') //adiciona elemento ao final da array
console.log(alphabet)
console.log(alphabet2)

//unshift
let alphabetNumber = alphabet.unshift(0) //adiciona elemento ao começo do array
console.log(alphabet)
console.log(alphabetNumber)

//pop
let alphabetIncomplete = alphabet.pop('G') //remove elemento do final da array
console.log(alphabet)
console.log(alphabetIncomplete)

//shift
let alphabetIncomplete2 = alphabet.shift(0) //remove elemento do inicio da array
console.log(alphabet)
console.log(alphabetIncomplete2)

//includes
let letterSearch = alphabet.includes('G') //verifica se elemento está presente da array, boolean
console.log(letterSearch)

//indexOf
let letterSearchPosition = alphabet.indexOf('B') //verifica a posição do elemento na array, indice
console.log(letterSearchPosition)

//slice
let sliceAlphabet = alphabet.slice(0, 3) //cria uma cópia baseada nos indices dados. Ex: [0] a [3] --> 'A', 'B', 'C'
console.log(alphabet)
console.log(sliceAlphabet)

//concat
let concat = alphabet.concat(alphabet2, 'I') //mescla dois ou mais arrays em um só array
console.log(alphabet)
console.log(concat)

//slpice
let newAlphabet = alphabet.splice(6, 1, 'G', 'H', 'I','J')  //indice / quant. de elementos a ser removidos / quais elementos irão substituir;
console.log(alphabet)
console.log(newAlphabet)