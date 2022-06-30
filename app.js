
 let userEmail = prompt("Want to join our newsletter? Enter your email below.");
 
 if ( userEmail != "" && userEmail != null ) {
    alert( "Thanks for joining!!" );
 } else {
    alert( "You are making a big mistake. We are Yoga Ninjas. And we know where you live." );
 }  

 if ( userEmail != "" && userEmail != null ) {
    document.write('Welcome to our newsletter ' + userEmail + '! ');
 } 
 /*
 else {
   while (userEmail == "" || userEmail == null) {  
      userEmail = prompt("Join our newsletter now! If you don't enter something you will be stuck in infinite loop hell.");
      if ( userEmail != "" && userEmail != null ) {
        document.write('Welcome to our newsletter ' + userEmail + '! ');
      }
  } 
 }
 */
