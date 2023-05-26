let amountOfMoney = parseFloat(prompt('How much money do you have baby?'));
let add = 0;
let take = 0;
let menu = '';

do{
  menu = prompt(
  `This is the amount of money you have: $${amountOfMoney}
  \nOption 1 - Add money
  \nOption 2 - Take money
  \nOption 3 - Leave`
  );
  
  if(menu === '1') {
    add = parseFloat(prompt('How much money do you want to add?'));
    amountOfMoney += add;
  }
  else if (menu === '2') {
    take = parseFloat(prompt('How much money do you want to take?'));
    amountOfMoney -= take;
  }
} while (menu !== '3');

alert('The program is closing... Thank you and cya!');