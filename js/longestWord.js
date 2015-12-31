// https://coderbyte.com/editor/guest:Longest%20Word:JavaScript
// Find the longest word in a string

var userSen = prompt("write a sentence");

var LongestWord = function(sen){
  // -split the string into ubstrings / an array
  var subStrings = sen.split(" ");
  // -Count the number of alphanumeric characters that are together, not separated by a space or any sign.
  var longest = "";

  // -cycle through the array get index of each word
  for(var wordIndex = 0; wordIndex < subStrings.length; wordIndex++){
    var subStr = subStrings[wordIndex];
    var currentWord = "";
    // -cycle through each word of the array and get the index of each character of the that word
    for(var charIndex = 0; charIndex < subStrings[wordIndex].length; charIndex++){
    // -check if each character is a valid letter in the word
      var charCode = subStrings[wordIndex].charCodeAt(charIndex);
      if ( ((charCode >= 65) && (charCode <= 90)) || ((charCode >= 97) && (charCode <= 122)) ) {
        // -it is a letter
        // -save each character of that word to a var
        currentWord += subStrings[wordIndex][charIndex];
        if(longest.length < currentWord.length){
          longest = currentWord;
        }
      } else {
        // -hit a character that isnt a letter reset currentWord
        currentWord = "";
      }
    }

  }
  document.getElementById('answer').innerHTML = "<strong> " + longest + "</strong>";

}

LongestWord(userSen);

document.getElementById('sentence').innerHTML = userSen;
