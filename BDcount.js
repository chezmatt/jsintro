(function(){
	var days = 60;

// 60 days until my birthday. Such a long time... :(

//1 DAY UNTIL MY BIRTHDAY!!!

// "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*" "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪" "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«"

/*For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, sound excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY HAVE PARTY!

*/


while (days>=0){
    if (days===0){
        console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪\n*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
         days--;
    }else if  (days < 5) {
        console.log("SCREAMING "+days);
         days--;
    }else if (days<30){
        console.log("Im Sooo Excited... " +days );
         days--;
    }else {
        console.log("sad "+days);
         days--;
    }
}
})();