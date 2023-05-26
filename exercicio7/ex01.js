let queue = []
let option = ''

do {
   let patients = ''
   for (let i = 0; i < queue.length; i++) {
   patients += `${(i + 1)}° - ${queue[i]}\n`
}  
   option = prompt(`
Patients Queue:\n${patients}
1. Add new patient.
2. Consult patient.
3. Leave.
`)

   switch (option) {
      case '1':
         let newPatient = prompt('Fill the name of the new patient here:')
         queue.push(newPatient)
         break
      case '2':
         const removedPatient = queue.shift()
         if (!removedPatient) {
            alert(`Do not have any patient to consult.`)
         } else {
            alert(`${removedPatient} was consulted!`)
         }
         break
      case '3':
         alert('Closing the program...')
         break
      default:
         alert('Please put a valid value in the fill box below.')
   }

} while (option !== '3')