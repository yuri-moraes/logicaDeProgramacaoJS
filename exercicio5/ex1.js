let choice = ''

do {
  choice = prompt(
    'Make a choice:' +
    '\n1 - Login' +
    '\n2 - Sign up' +
    '\n3 - Home' +
    '\n4 - Contact' +
    '\n5 - Leave'
  );

  if (choice === '1') {
    alert('You choosed the option "1 - Login"')
  }
  else if (choice === '2') {
    alert('You choosed the option "2 - Sigin up"')
  }
  else if (choice === '3') {
    alert('You choosed the option "3 - Home"')
  }
  else if (choice === '4') {
    alert('You choosed the option "4 - Contact"')
  }
}while (choice !=='5');

alert(`You choosed the option "5 - Leave" so excuse me, LEAVE!`)