//functions to calculate geometric shapes below.

function triangleArea () {
  const base = parseFloat(prompt('Put here the value of the base of the triangle:'))
  const height = parseFloat(prompt('Put here the value of the height of the triangle:'))
  return base * height /2
}

function rectangleArea () {
  const base = parseFloat(prompt('Put here the value of the base of the rectangle:'))
  const height = parseFloat(prompt('Put here the value of the rectangle of the rectangle:'))
  return base * height
}

function squareArea () {
  const side = parseFloat(prompt('Put here the value of the side of the square:'))
  return side ** 2
}

function trapezoidArea () {
  const largerBase = parseFloat(prompt('Put here the value of the larger base of the trapezoid:'))
  const smallerBase = parseFloat(prompt('Put here the valeu of the smaller base of the trapezoid:'))
  const height = parseFloat(prompt('Put here the value of the height of the trapeze:'))
  return (largerBase + smallerBase) * height / 2
}

function cirlceArea () {
  const radius = parseFloat(prompt('Put here the value of the radius of the circle:'))
  return radius * (3.14)**2
}

let option = ''

do {
  option = prompt(`
  Choose an option below to calculate:
  1. Triangle area;
  2. Rectangle area;
  3. Square area;
  4. Trapezoid area;
  5. Circle area;
  6. Close the program.
  `)

  switch (option) {
    case '1':
      //triangle area
      alert (`The triangle area is ${triangleArea()}.`)
      break

    case '2':
      //rectangle area 
      alert (`The rectangle area is ${rectangleArea()}.`)
      break

    case '3':
      //square area
      alert (`The square area is ${squareArea()}.`)
      break

    case '4':
      //trapezoid area
      alert (`The trapezoid area is ${trapezoidArea()}.`)
      break

    case '5':
      //circle area
      alert (`The cirlce area is ${cirlceArea()}.`)
      break

    case '6':
      alert('Closing the program...')
      break

    default: 
    alert('Invalid value!')
  }

} while (option !== '6') 