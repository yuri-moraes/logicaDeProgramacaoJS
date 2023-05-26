let deckOfCards = []
let option = ''

do {
  option = prompt(`
Cards on the table:\n${deckOfCards.length}

1. Add new card.
2. Push a card.
3. Leave.
`)

  switch (option) {
    case '1':
      const newCard = prompt("What's the name of your card?")
      deckOfCards.push(newCard)
      break
    case '2':
      let pushedCard = deckOfCards.pop()
      if (pushedCard) {
        alert(`${pushedCard} was pushed.`)
      }else {
        alert("Don't have any card to push.")
      }
      break
    case '3':
      alert(`Closing the program...`)
      break
    default:
      alert('Invalid valor!')
  }

} while (option !== '3')