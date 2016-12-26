// Make a function that copies an array, ONLY accepting the items that are numbers.
// HINT
//
// Use typeof to determine type (ex: typeof 24 === "number" would be true)
//
// Bonus (Only If You Have Time):
//
// Make a second function that removes them from the given array. (instead of copying to a new array)
// Do you need to return the array?
var newArray = numbersOnly([1, "apple",0,null, -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
function numbersOnly(array){
  for (var i = 0; i < array.length; i++) {
    if (typeof (array[i]) === "number") {
      array[i]=array[i];
    } else {
      array[i]=undefined;
    }
  }
    // scrub out undefined values...preserves 0 but not null
    array = array.filter(
        function(n){
            return n !== undefined;
        }
    );
    return array;
}
console.log(newArray);
