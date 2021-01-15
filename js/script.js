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
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
