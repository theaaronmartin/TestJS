console.log('Now you are working with javascript')

// This is a funtion that will get a user name
function getName () {
  var nameResult = prompt('What is your name?')
  return nameResult
}

// We just asked for the user name
var someName = getName()

// This is a funtion that uses a name to welcome someone
// You need to give it a name
function welcome (name) {
console.log(name)
  alert(name + '? What a dumb name!')
}

// Give a name and welcome someone
welcome(someName)
