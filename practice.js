function getName () {
  var nameResult = prompt('What is your name?')
  return nameResult
}

function welcome (nameResult) {
  alert('Welcome ' + nameResult)
}

var nameResult = getName()

welcome(nameResult)
