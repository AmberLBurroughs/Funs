// https://coderbyte.com/editor/guest:Simple%20Symbols:JavaScript
// check if all the letters in the str are surrounded by '+'

function SimpleSymbols(str) {
  //cycle through the str
  var charCount = 0;
  var valCharCound = 0;
  for(var index = 0; index < str.length; index++){
    var curIndxCode = str[index].charCodeAt(0); // convert current char to a decimal
    //check if deciaml is alphabetical
    if(((curIndxCode >= 65) && (curIndxCode < 90)) || ((curIndxCode >= 97) && (curIndxCode < 122))){
      // get char before & after current char
        charCount++; //how many letters
      if( str[index+1] == '+' &&   str[index-1]== '+'){
        valCharCound++; // how many valid letters
      }else {
        return false;
      }
   }
   // check if str includes '='
   if(!str.includes("="))
    return false;
  }
  return charCount == valCharCound;
}
