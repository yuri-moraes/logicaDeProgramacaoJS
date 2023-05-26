let firstName = prompt('Digite o seu primeiro nome: ')
let lastName = prompt('Sobrenome: ')
let studyCamp = prompt('Campo de estudo: ')
let yearOfBirth = prompt('Ano de nascimento: ')
let age = 2023 - parseFloat(yearOfBirth)

let register = alert('Nome: '+firstName+" "+lastName+'\nCampo de estudo: '+studyCamp+'\nIdade: '+age+' anos')

let number1 = prompt('Digite o primeiro número para ser calculado: ')
let number2 = prompt('Digite o segundo número para ser calculado: ')
number1 = parseFloat(number1) ; number2 = parseFloat(number2)
let sum = number1 + number2
let sub = number1 - number2
let mul = number1 * number2
let div = number1 / number2
let result = alert('Somados: '+sum+'\nSubtraídos: '+sub+'\nMultiplicados: '+mul+'\nDivididos: '+div)