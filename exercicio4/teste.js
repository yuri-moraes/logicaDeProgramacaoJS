const turistName = prompt('Olá! Qual o seu nome turista? ')
let cities = ''
let quant = 0

let question = prompt(turistName+' já visitou alguma cidade? (S/N)')

while (question === 'S' || question === 's') {
  cityName = prompt('Qual o nome da cidade visitada? ')
  cities += ' - ' + cityName + "\n"
  quant++
  question = prompt('Já visitou mais alguma outra cidade? (S/N)')
}

alert(
'Turista: '+turistName+
'\nCidades visitadas: \n'+cities+
'\nQuantidade de cidades visitadas: '+quant
)