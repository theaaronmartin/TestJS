function getDivision (number1, number2) {
  var math

  if (number1) {
    math = number1 / number2
  }
  return math
}

var one = prompt('Division: Pick a number')
var two = prompt('Pick another number')
var quotient = getDivision(one, two)
alert(one + ' / ' + two + ' = ' + quotient)


function getAddition (number1, number2) {
  var math

  if (number1) {
    math = parseFloat(number1) + parseFloat(number2)
  }
  return math
}

var one = prompt('Addition: Pick a number')
var two = prompt('Pick another number')
var sum = getAddition(one, two)
alert(one + ' + ' + two + ' = ' + sum)


function getMultiplication (number1, number2) {
  var math

  if (number1) {
    math = number1 * number2
  }

  return math
}

var one = prompt('Multiplication: Pick a number')
var two = prompt('Pick another number')
var product = getMultiplication(one, two)
alert(one + ' * ' + two + ' = ' + product)


function getSubtraction (number1, number2) {
  var math

  if (number1) {
    math = number1 - number2
  }

  return math
}

var one = prompt('Subtraction: Pick a number')
var two = prompt('Pick another number')
var difference = getSubtraction(one, two)
alert(one + ' - ' + two + ' = ' + difference)


function getModulus (number1, number2) {
  var math

  if (number1) {
    math = number1 % number2
  }

  return math
}

var one = prompt('Modulus: Pick a number')
var two = prompt('Pick a number')
var remainder = getModulus(one, two)
alert(one + ' % ' + two + ' = ' + remainder)
