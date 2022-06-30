let numStars = null;
 
while (numStars == null || numStars == "" || numStars > 5 || numStars < 1) {  
   numStars = prompt("Rate our webite with 1-5 stars.\nThis pop-up will annoy you until you do!");
}

var result = document.getElementById("ratings");
for (let i = 0; i < numStars; i++) {
    result.appendChild(document.createElement('img')).src = "SmallStar.png";
  }

