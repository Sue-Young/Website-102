
let userEmail = prompt("Want to join our newsletter? Enter your email below.");

if ( userEmail != "" && userEmail != null ) {
    alert( "Thanks for joining!!" );
} else {
    alert( "You are making a big mistake. We are Yoga Ninjas. And we know where you live." );
}

if ( userEmail != "" && userEmail != null ) {
    document.write('Welcome to our newsletter ' + userEmail + '! ');
}

