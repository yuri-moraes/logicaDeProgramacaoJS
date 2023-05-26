let attackerName = prompt('Dê o nome para o atacante:');
let attackerDamage = parseFloat(prompt('Atribua a quantidade de poder de ataque de '+attackerName));
//variável de nome e dano respectivamente para o atacante, atribuídos com o valor preenchido pelo suário.

let defenderName = prompt('Dê o nome para o defensor:');
let lifePoints = parseFloat(prompt('Dê a quantidade de pontos de vida para '+defenderName+':'));
let defensePower = parseFloat(prompt('Dê a quantidade de poder de defesa para '+defenderName+':'));
let shield = confirm('Deseja adicionar um escudo a '+defenderName+' ?');
/* variáveis de nome, pontos de vida, defesa e escudo respectivamente, preenchidos pelo usuário, sendo a resposta do escudo booleana (true or false)*/

let dmg = 0

if (attackerDamage > defensePower && !shield) {
  dmg = attackerDamage - defensePower;
  lifePoints = lifePoints - dmg;
  alert('Defensor: '+defenderName+'\nDano Recebido = '+dmg+'\nVida atual: '+lifePoints+'\nAtacante: '+attackerName+'\nPoder de ataque: '+attackerDamage);

}else if (attackerDamage > defensePower && shield===true) {
  dmg = (attackerDamage - defensePower) / 2;
  lifePoints = lifePoints - dmg;
  alert('Defensor: '+defenderName+'\nDano Recebido = '+dmg+'\nVida atual: '+lifePoints+'\nAtacante: '+attackerName+'\nPoder de ataque: '+attackerDamage);

}else {
  alert('Defensor: '+defenderName+'\nDano Recebido = '+dmg+'\nVida atual: '+lifePoints+'\nAtacante: '+attackerName+'\nPoder de ataque: '+attackerDamage);
};