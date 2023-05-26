let carName1 = prompt('Escreva o nome do primeiro carro: ');
let carName2 = prompt('Escreva o nome do segundo carro: ');
let carSpeed1 = prompt("Escreva a velocidade em km/h do carro " +carName1)
let carSpeed2 = prompt("Escreva a velocidade em km/h do carro " +carName2)
car1 = parseFloat(carSpeed1); car2 = parseFloat(carSpeed2);

alert(car1 > car2 ? 
 carName1+" é mais rápido que "+carName2 : 
 car1 < car2 ?
 carName2+" é mais rápido que "+carName1 : 
 carName1+" e "+carName2+" possuem a mesma velocidade"
 )

/*if (car1 > car2) {
  alert("O carro "+carName1+" é mais rápido que o carro "+carName2)
}else if (car1 < car2) {
  alert("O carro "+carName2+" é mais rápido que o carro "+carName1)
}else{
  alert(carName1+" e "+carName2+" possuem a mesma velocidade!")
}*/