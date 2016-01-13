   			 var randomLink = function () {
   		     // first create an array of problems
   		     var probs = [
   		         "What is 2+2?",
   		         "What is 3+3"
   		     ];
   		     var answ = [
   		         "4",
   		         "6"
   		     ]
   		     // then work out the maximum random number size
   		     // by counting the number of links in the array
   		     var max = (links.length)
	
   		     // now generate a random number
   		     var randomNumber = Math.floor(Math.random()*max);
   		     // use that random number to retrieve a link from the array
   		     var prob = probs[randomNumber];
	
   		     // change the location of the window object
   		     var ans = prompt(probs);
   		     if (ans == answ[randomNumber]){
   		        confirm('You're Wrong, answer is ' + answ[randomNumber]);
   		     } else {
   		        confirm('You're Right');
   		     }
   		 }
