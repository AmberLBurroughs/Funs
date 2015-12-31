// https://coderbyte.com/editor/guest:Letter%20Changes:JavaScript
// change every letter in a string to the following letter in the alphabet
// capitalize the vowel in the new string

function LetterChanges(str){
  var vowels = ["a", "e", "i", "o", "u"]; // array of vowels'
  var newStr = ""; // add new char from the old str

  //cycle through each char in the string
  for(var strIndex = 0; strIndex < str.length; strIndex++){
    //.charCodeAt(0);
    var crntChar = str[strIndex].charCodeAt(0);  // get char decimal
    // check if letter is in valid range, if so add one decimal
    if( ((crntChar >= 65) && (crntChar < 90)) || ((crntChar >= 97) && (crntChar < 122)) ){
      //change each char to next letter in alphabet
      crntChar++;// add a decimal ; (z,Z) 90 && 122
      // save new string in a var
      newStr += String.fromCharCode(crntChar); //covert back to a letter
    }else if(crntChar === 90){
      newStr += 'A'; // upper Z
    }else if(crntChar === 122){
      newStr += 'a'; // lower z
    }else{
      newStr += str[strIndex]; // if not alphabetical
    }

  }
  //cycle through the new str
  for(var charIndex = 0; charIndex < newStr.length; charIndex++){
      var newChar = newStr[charIndex];
      //check if the char is a vowel
      if(vowels.includes(newChar)){
        //is true capitalize it
        newStr[charIndex] = newChar.toUpperCase(); //
      }
  }
    return newStr;
}
