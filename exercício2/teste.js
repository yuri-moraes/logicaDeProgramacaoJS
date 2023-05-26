let attackerName = prompt('Dê o nome para o atacante:');
let attackerDamage = parseFloat(prompt('Atribua a quantidade de poder de ataque de ' + attackerName));

let defenderName = prompt('Dê o nome para o defensor:');
let lifePoints = parseFloat(prompt('Dê a quantidade de pontos de vida para ' + defenderName + ':'));
let defensePower = parseFloat(prompt('Dê a quantidade de poder de defesa para ' + defenderName + ':'));
let shield = confirm('Deseja adicionar um escudo a ' + defenderName + ' ?');

let damage = 0;

if (!Number.isFinite(lifePoints) || !Number.isFinite(defensePower) || !Number.isFinite(attackerDamage)) {
  alert("Por favor, insira valores numéricos válidos para pontos de vida, defesa e poder de ataque.");
} else {
  if (attackerDamage > defensePower && !shield) {
    damage = attackerDamage - defensePower;
    lifePoints = lifePoints - damage;
  } else if (attackerDamage > defensePower && shield) {
    damage = (attackerDamage - defensePower) / 2;
    lifePoints = lifePoints - damage;
  }
  
  alert(
    `Defensor: ${defenderName}\nDano Recebido = ${damage}\nVida atual: ${lifePoints}\nAtacante: ${attackerName}\nPoder de ataque: ${attackerDamage}`
  );
}