function convertTemp (degrees, tempType) {
  var convertedTemp

    if (degrees === 'F' || degrees === 'f') {
    convertedTemp = (degrees - 32) * 5 / 9
    } else {
    convertedTemp = (degrees * 9) / 5 + 32
    }
  }

  return convertedTemp
}

var temp = convertTemp(0, 'C')
console.log(temp)
