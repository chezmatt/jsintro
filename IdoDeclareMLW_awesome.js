/* I do declare exercises for WebFundamentals / JS at Coding Dojo by Matt Wilkinson.
     Just a warning, I had way too much fun doing this....*/

// Declaring 4 numbers:
var one = 1;            // this is an integer!
var tempToday = -12;    // another integer!
var price = 234.45;     // a floating point number
var tax = 0.14;         // another float

// 3 strings to decalre:
var Coding = "Dojo!";   // totally a string
var theAnswer = "42";   // wait is this a string too?
var myFirstname = "Matthew";
var myLastname = "Wilkinson";

// Booleans
var male = true;
var votedTrump = false;

//undefined
var whaaaaa;




// look! if the data type of a variable is a number,
// you can do math with it!
// for example:

function coolness (v){
	var result = v*2;
	console.log(v +" times two is "+result);
	return result;
}
// now to call the above funtion
coolness (one); //passing in the variable: one 


// a self executing annonymous function that determines the weather...
(function(tempToday){
  var msg;
  tempToday = Number(tempToday);
  if (isNaN(tempToday)) {
    msg = "Not a Number!";
  } else {
    msg = (tempToday < 75) ? tempToday + "deg. is Too Cold!" : tempToday +"deg. is Too Hot!";
    console.log(msg);
  }
 })(tempToday);

// Sales Taxes are considered regressive, especially in Silicon Valley...
console.log (" The price of $"+price+" with Tax in CA is: $"+Math.round(price*(tax+1)*100)/100);


// You can do really cool things with strings too!
console.log(
  Coding + "Dojo?"
);


// Is 42 = "42"?
var theQuestion = Boolean( 42 === theAnswer); // checking the data type with ===
console.log("Is 42 the same as string of 42? Answer: "+theQuestion+".");
// if we did Math on "42" we'd get NAN ... Not A Number!


// oh look we've now found ourselves at Booleans (no not the blue people from Star Trek...)
// things in JS can be kindof truthy and falsey sort of like the election of 2016...
var an_object_about_me =   // this is an object!!!!
{
  "myFullName": myFirstname + " " + myLastname,
  "man" : male,
  "deplorable" : votedTrump,
  "age" : 32,
  "hair" : "brown",
  "lovesJS" : true, // bool val
}
var allMe = an_object_about_me.myFullName;
console.log("My name is: "+allMe);

var who = (an_object_about_me.man === true )? "men" : "women";
console.log("All "+ who +" vote for Trump: "+an_object_about_me.deplorable);


// What is undefined?
console.log(
  "whaaaaa??? is "+whaaaaa
);