let userAge = null;
 
while (userAge == null || userAge == "") {  
   userAge = prompt("Enter your age to find out how much younger you could be with a Yoga practice.\nThis pop-up will annoy you until you do!");
}
      
 function reverseAge( age ) {
   return Math.round(age/1.5);
 }
 
 document.getElementById("years").innerHTML = reverseAge(userAge);
 
