// https://coderbyte.com/editor/guest:First%20Factorial:JavaScript
// -have the function take the num parameter being passed and return the factorial of it
  // (ie. if num = 4, return (4 * 3 * 2 * 1)).

// -on page load
// -enter to submit input
var onLoad = function(){
  var userInput = document.getElementById("userInput");
  userInput.addEventListener("keydown", function(enter) {
      if (!enter) { var enter = window.event; }
      // Enter is pressed
      if (enter.keyCode == 13) { fact(); }
  }, false);

}
// -collect the inputs value
var getInput = function(){
  var userInput = document.getElementById("userInput").value;
  var userNum = parseInt(userInput);
  return userNum;
}
// -pass in input
var fact = function(){
  var num = getInput();
  var ttl = 1;
  if(num !== 0){
    for(var i = 1; i <= num; i++){
      ttl = i * ttl;
    }
  }
  document.getElementById('answer').innerHTML = "The factorial is: " + "<strong> " + ttl + "</strong>";

}

onLoad();
