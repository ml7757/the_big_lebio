// var myImage = document.querySelector('img');
//
// myImage.onclick = function() {
//   var mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/the_dude.jpeg') {
//     myImage.setAttribute('src','images/relaxed_dude.jpeg');
//   } else {
//     myImage.setAttribute('src','images/the_dude.jpeg');
//   }
// }
var recreation = document.getElementById("recreation");
var knownFor = document.getElementById("knownFor");
var employment = document.getElementById("employment");

recreation.addEventListener("mouseenter", function( event ) {
  event.target.style.fontStyle = "italic";
  event.target.style.fontWeight = "normal";
  event.target.style.fontFamily = "sans-serif";
  event.target.textContent = "Oh, the usual. I bowl. Drive around. The occasional acid flashback.";
}, false);

recreation.addEventListener("mouseleave", function( event ) {
  event.target.style.fontStyle = "normal";
  event.target.style.fontWeight = "bold";
  event.target.style.fontFamily = "Krona One";
  event.target.textContent = "Favourite recreational events?";
}, false);

knownFor.addEventListener("mouseenter", function( event ) {
  event.target.style.fontStyle = "italic";
  event.target.style.fontWeight = "normal";
  event.target.style.fontFamily = "sans-serif";
  event.target.textContent = "Did you ever hear of \"The Seattle Seven\"? That was me...and six other guys.";
}, false);

knownFor.addEventListener("mouseleave", function( event ) {
  event.target.style.fontStyle = "normal";
  event.target.style.fontWeight = "bold";
  event.target.style.fontFamily = "Krona One";
  event.target.textContent = "Best known for?";
}, false);

employment.addEventListener("mouseenter", function( event ) {
  event.target.style.fontStyle = "italic";
  event.target.style.fontWeight = "normal";
  event.target.style.fontFamily = "sans-serif";
  event.target.textContent = "I'm unemployed. Was in the music business briefly. Roadie for Metallica, Speed of Sound Tour.";
}, false);

employment.addEventListener("mouseleave", function( event ) {
  event.target.style.fontStyle = "normal";
  event.target.style.fontWeight = "bold";
  event.target.style.fontFamily = "Krona One";
  event.target.textContent = "What do you do for employment?";
}, false);

music.addEventListener("mouseenter", function( event ) {
  event.target.style.fontStyle = "italic";
  event.target.style.fontWeight = "normal";
  event.target.style.fontFamily = "sans-serif";
  event.target.textContent = "Creedence [Clearwater Revival]. I hate the Eagles.";
}, false);

music.addEventListener("mouseleave", function( event ) {
  event.target.style.fontStyle = "normal";
  event.target.style.fontWeight = "bold";
  event.target.style.fontFamily = "Krona One";
  event.target.textContent = "Who is your favourite band?";
}, false);
