// Un alert espone 5 numeri casuali diversi.

function isPresent(par1, par2) { //function to check if the parameter1 is equal to parameter2
  var result = false;

  for (var j = 0; j < par2.length; j++) {
    if (par1 === par2[j]) {
      result = true;
    }
  }
  return result;
}

function randomNums(min, max) {
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

var arrayRandomNum = [];


while (arrayRandomNum.length < 5) {
  var randomNum = randomNums(1, 10)
  var comparedNums = isPresent(randomNum, arrayRandomNum);

  if (comparedNums === false) {
    arrayRandomNum.push(randomNum);
  }

}
alert(arrayRandomNum);



// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

var arrayUserNum = [];
var gotNumbers = [];

setTimeout(function() {
  while (arrayUserNum.length < 5) {
    var userNum = parseInt(prompt('Type, one after the other, the numbers you recall:'));
    var comparedNums = isPresent(userNum, arrayUserNum);

    if (isNaN(userNum)) {
      alert('You should insert a number.')
    } else if (comparedNums === true) {
      alert('Number already entered. Try again.')
    } else {
      if (arrayRandomNum.includes(userNum)) {
        arrayUserNum.push(userNum);
        gotNumbers.push(userNum);
      } else {
        arrayUserNum.push(userNum);
      }
    }
  }
  console.log(arrayUserNum)

  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  alert('The numbers were: ' + arrayRandomNum + '.\nYou recalled these numbers: ' + gotNumbers);


}, 30000); 
