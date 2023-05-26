let number = parseFloat(prompt('Dê o valor em metros (m) para ser convertido:'))
//Will ask the number to be converted after.
let choice = prompt('Escolha qual medida deve ser convertida digitando o símbolo da medida:\n\n- milímetro (mm)\n- centímetro (cm)\n- decímetro (dm)\n- decâmetro (dam)\n- hectômetro (hm)\n- quilômetro (km)')
//will ask about the valor to be converted, and need to write just the symbol of the measure.

let convert = 0

switch(choice) { //the calculation of the number in the converted measure will happen here.
  case 'mm':
    convert = number * 1000
    choice = 'milímetros'
    break
  case 'cm':
    convert = number * 100
    choice = 'centímetros'
    break
  case 'dm':
    convert = number * 10
    choice = 'decímetros'
    break
  case 'dam':
    convert = number / 10
    choice = 'decâmetros'
    break
  case 'hm':
    convert = number / 100
    choice = 'hectômetros'
    break
  case 'km':
    convert = number / 1000
    choice = 'quilômetros'
    break
  default:
    alert('Erro: opção inválida!')
}
alert('O valor '+number+'m convertido em '+choice+' será '+convert+' '+choice)
