
 let userAge = prompt("Enter your age to find out how much yoga can make you younger.");
      
 function reverseAge( age ) {
   return Math.round(age/1.5);
 }
 
 document.getElementById("years").innerHTML = reverseAge(userAge);
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
