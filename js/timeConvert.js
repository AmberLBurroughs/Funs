// https://coderbyte.com/editor/guest:Time%20Convert:JavaScript

function TimeConvert(num) {
 var minutes = num%60
 var hours = (num - minutes) / 60

 return hours + ":" + minutes;
}
