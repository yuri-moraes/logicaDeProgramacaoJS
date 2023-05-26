const number = parseFloat(prompt('Type a number to show his multiplication until the 20th number: '))
let mult = 0
let i = 1
let result = ''

for (i; i <= 20; i++ ) {
  mult = number * i
  result += `${number} x ${i} = ${mult} \n`
}

alert(`Multiplication tabel result of number ${number}: \n${result}`) 