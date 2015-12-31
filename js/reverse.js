// https://coderbyte.com/editor/guest:First%20Reverse:JavaScript
// reverse the letters in a string

var reverse = function(str) {
  var revdStr = ""; // add the strings characters in reverse
  // cycle through the string
  for (var strIndex = str.length - 1; strIndex >= 0; strIndex--)
    revdStr += str[strIndex];
  }
  return revdStr;
}

//function reverse(str) {
//  return str.split('').reverse().join('');
//}
