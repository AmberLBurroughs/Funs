// https://coderbyte.com/editor/guest:Letter%20Capitalize:JavaScript
// capitalize the first letter of every word in a string

function LetterCapitalize(str) {
  var strArr = str.split(" ");
  var newArr = [];

  for(var i = 0 ; i < strArr.length ; i++ ){

    var FirstLetter = strArr[i].charAt(0).toUpperCase();
    var restOfWord = strArr[i].slice(1);

    newArr[i] = FirstLetter + restOfWord;

  }

  return newArr.join(' ');

}
