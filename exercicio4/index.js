const turist = prompt('Digite o seu nome:')
let question = prompt('Você já visitou alguma cidade? (S/N)')
let citiesVisited = []

while (question === 'S' || question === 's' || question === 'sim') {
  let city = prompt('Qual o nome da cidade que você visitou?')
  citiesVisited.push(city) //irá puxar os elementos preenchidos na variável "city"
  question = prompt('Você visitou mais alguma cidade? (S/N)')
}

alert(
'Nome: ' + turist +
'\nCidades Visitadas: '+ citiesVisited.join(', ') +  //irá juntar os elementos adicionando "," e espaço entre os elementos.
'\nQuantidade de cidades visitadas: ' + citiesVisited.length)