function getDivision (number1, number2) {
  var math

  if (number1){
    math = number1 / number2
  }
  return math
}

var one = prompt('Pick a number')
var two = prompt('Pick another number')
var quotient = getDivision(one, two)
alert(one + ' / ' + two + ' = ' + quotient)
