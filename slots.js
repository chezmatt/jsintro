// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;

var result = "Insert a coin to play."
var coins = 0;


function getRandom(min, max) {
// min = Math.ceil(min);
// max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
function play( coins  )
{
    for (var i=coins; i >0 ; i--){
        var x = getRandom(1,100);
        var y = getRandom(1,100);
        if (x===y){
            // win();
            console.log ("YOU WON !!! You have " + --i + " remaining." );
        }else{
            // loose();
            console.log("Sorry, you lost you have " + --i + " remaining." );
            
        }
    }
    
}










play(50);


