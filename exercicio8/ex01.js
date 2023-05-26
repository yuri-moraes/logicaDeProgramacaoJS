const properties = []
let option = ''

do {
  option = prompt(`
Quantity of properties: ${properties.length}

Choose a option below:
1. Save a propertie;
2. Show all saved properties;
3. Close the program.
`)

  switch (option) {
    case '1':
      const info = {}

      info.ownerName = prompt('What is the owner name?')
      info.roomsNumber = parseFloat(prompt('Quantity of rooms:'))
      info.bathroomsNumber = parseFloat(prompt('Quantity of bethrooms:'))
      info.garage = confirm('Has a garage on the propertie?')
      
      const confirmation = confirm(`
      Do you want to save this propertie information?
      Owner name: ${info.ownerName}
      Rooms: ${info.roomsNumber}
      Bathrooms: ${info.bathroomsNumber}
      Garage: ${info.garage ? 'Yes' : 'No'}
      `)

      if (confirmation) {
        properties.push(info)
        alert('Saving the data.')
      } else {
        alert('Going back to menu...')
      }
      break

    case '2':
      for (let i = 0; i < properties.length; i++) {
        alert(`
        Propertie ${i + 1}
        Owner: ${properties[i].ownerName}
        Rooms: ${properties[i].roomsNumber}
        Bathrooms: ${properties[i].bathroomsNumber}
        Garage: ${properties[i].garage ? 'Yes' : 'No'}
        `)
      }  
      break

    case '3':
      alert('Closing the program...')
      break

    default:
      alert('Invalid value!')
}

} while (option !== '3')