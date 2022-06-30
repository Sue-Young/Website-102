
let userEmail = prompt("Want to join our newsletter? Enter your email below.");

if ( userEmail != "" && userEmail != null ) {
    alert( "Thanks " + userEmail + " for joining Full Circle Yoga." );
} else {
    alert( "You are making a big mistake. We are Yoga Ninjas. And we know where you live." );
    userEmail = prompt("Try again? Enter your email below.");
}  

if ( userEmail != "" && userEmail != null ) {
    document.getElementById("welcome").innerHTML = "Welcome to the Full Circle community, " + userEmail + "!";
} 
   

