var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
/*
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
*/
var when;

if (MINUTE < 30) {
  when = "just after"
}else{
  when = "almost"
  HOUR++;
}
var morn;
if (PERIOD =="AM"){
    morn="in the morning."
}else{
    morn="in the evening."
}

console.log("It's ", when, HOUR ," ",morn);