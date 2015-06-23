   			 var randomLink = function () {
   		     // first create an array of links
   		     var links = [
   		         "http://thebest404pageever.com",
   		         "http://thebest404pageever.com/swf/Fed_Ex.swf",
   		         "http://thebest404pageever.com/swf/Fire_Fight.swf",
   		         "http://ifunny.co/fun/vK76BN613", //Half air half water
   		         "http://thebest404pageever.com/swf/NOT_DEFECTIVE.swf",
   		         "http://thebest404pageever.com/swf/MYBRAND.swf",
   		         "http://thebest404pageever.com/swf/Mythbusters.swf",
   		         "https://www.youtube.com/embed/_p52QJi-Ydo", //Marty Chang's PC Tips
   		         "https://www.youtube.com/embed/Vw8JoviHm8g", //Marty Chang's Gardening
   		         "https://www.youtube.com/embed/BEfg12hae7s", //Marty Chang's Barbeque
   		         "https://www.youtube.com/embed/QrGrOK8oZG8", //Too Many cooks
   		         "http://heeeeeeeey.com/",
   		         "http://ninjaflex.com/",
   		         "http://ifunny.co",
   		         "http://motherfuckingwebsite.com",
   		         "http://www.findtheinvisiblecow.com",
   		         "http://www.theonion.com",
   		         "http://textastrophe.com",
   		         "http://awkwardfamilyphotos.com",
   		         "http://www.lamebook.com",
   		         "http://xkcd.com",
   		         "http://www.willitblend.com",
   		         "http://www.crackshackormansion.com",
   		         "http://literallyunbelievable.org",
   		         "http://www.reddit.com/r/techsupportmacgyver",
   		         "http://www.funswitcher.com",
   		         "http://savethesounds.info",
   		         "http://www.googlefeud.com",
   		         "http://www.gizoogle.net/textilizer.php",
   		         "https://www.youtube.com/embed/lagDDke1UUo"
   		     ];
   		     // then work out the maximum random number size
   		     // by counting the number of links in the array
   		     var max = (links.length)
	
   		     // now generate a random number
   		     var randomNumber = Math.floor(Math.random()*max);
   		     // use that random number to retrieve a link from the array
   		     var link = links[randomNumber];
	
   		     // change the location of the window object
   		     window.location = link;
   		 }
