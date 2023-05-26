let option = ''
const vacancy = []

function createVacancy() {
  let name = prompt('The vacancy name:')
  let description = prompt('Description of the vacancy:')
  let deadline = prompt('Deadline:')

  const confirmation = confirm(`
  Do you want to create this vacancy?

  ${name}
  Description: ${description}
  Deadline: ${deadline}
  `)

  if (confirmation) {
    vacancy.push({
      name: name,
      description: description,
      deadline: deadline,
      candidates: []
    })
    alert(`Vacancy created successfully`)
  } else {
    alert('Creation canceled, going back to the menu...')
  }
}

function listVacancy() {  
  if (vacancy.length > 0) {
    vacancy.forEach( function (name, index) {
      alert(`${index}. ${name.name} - ${name.candidates.length} Candidates subscribed.`)
    })
    return
  } else {
    alert('Have no vacancies availavle in this moment...')
    return
  }
}

function viewVacancy() {
  const index = parseInt(prompt(`The index of the job vacancy you want to view:`))
  
  if (index < 0 || index >= vacancy.length || isNaN(index)) {
    alert(`Invalid value! There are ${vacancy.length} vacancies available`)
    return
  }

  const selectedVacancy = vacancy[index]

  alert(`
Index: ${index}
Name: ${selectedVacancy.name}
Description: ${selectedVacancy.description}
Deadline: ${selectedVacancy.deadline}
Quantity of candidates: ${selectedVacancy.candidates.length}
Candidates name: ${selectedVacancy.candidates.join(', ')}
  `)
}

function subscribeCandidate() {
  const candidateName = prompt('Name:')
  const index = parseInt(prompt('Index:'))

  if (index < 0 || index >= vacancy.length || isNaN(index)) {
    alert(`Invalid value! There are ${vacancy.length} vacancies available`)
    return
  }

  const selectedVacancy = vacancy[index]

  const confirmation = confirm(`
Do you confirm your enrollment in the vacancy ${selectedVacancy.name}?

Your name: ${candidateName}

Index: ${index}
Name: ${selectedVacancy.name}
Description: ${selectedVacancy.description}
Deadline: ${selectedVacancy.deadline}
Quantity of candidates: ${selectedVacancy.candidates.length}
  `)

  if (confirmation) {
    selectedVacancy.candidates.push(candidateName)
    alert(`You are successfully subcribed in the vacancy: ${selectedVacancy.name}`)
  } else{
    alert(`Subscribe not maded, going back to the menu.`)
  }
}

function deleteVacancy() {
  const index = parseInt(prompt('Index of the job vacancy:'))

  if (index < 0 || index >= vacancy.length || isNaN(index)) {
    alert(`Invalid value! There are only ${vacancy.length} vacancies available.`)
    return
  }

  const selectedVacancy = vacancy[index] 

  const deleteConfirmation = confirm(`
Do you want to delete this vacancy?

Index: ${index}
Name: ${selectedVacancy.name}
Description: ${selectedVacancy.description}
Deadline: ${selectedVacancy.deadline}
Number of Candidates: ${selectedVacancy.candidates.length}
  `)

  if (deleteConfirmation) {
    vacancy.splice(index, 1)
    alert('Vacancy deleted successfully!')
  } else {
    alert('Vacancy not deleted, going back to the menu...')
  }
}

do {
  option = prompt(`
  Your Site of Job Vacancy, make a choice:
  1 - List available vacancies
  2 - Create a new vacancy
  3 - View new vacancy
  4 - Subscribe a candidate to a vacancy
  5 - Delete a vacancy
  6 - Exit
  `)

  switch (option) {
    case '1':
      listVacancy()
      break

    case '2':
      createVacancy()
      break

    case '3':
      viewVacancy()
      break

    case '4':
      subscribeCandidate()
      break


    case '5':
      deleteVacancy()
      break

    case '6':
      alert('Leaving the program...')
      break

    default:
      alert('Invalid value!')
  }
} while (option !== '6')