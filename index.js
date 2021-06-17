//selecting all the drum buttons in the document
var drumButtons = document.querySelectorAll(".drum");

//animation function for the buttons when clicked or key is pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


//function to play a drum sound based on a character input
function playDrum(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
      console.log(key);

  }
}

//adding a click listener to each drum button
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    playDrum(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


//adding a keyboard listener to the webpage
document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  buttonAnimation(event.key);
})
