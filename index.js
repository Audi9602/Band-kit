var musicButtons=document.querySelectorAll(".muse").length;

for(var i=0; i<musicButtons;i++){
  document.querySelectorAll(".muse")[i].addEventListener("click", function() {
    //this.style.color="purple";
   //console.log(this.innerHTML);
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  });

  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    //console.log(event);
  });


  function makeSound(key){
    switch (key) {
      case "a":
        var audio=new Audio("sounds/guitar.wav");
        audio.play();
        break;
  
      case "d":
        var audio=new Audio("sounds/eguitar.wav");
        audio.play();
        break;
  
      case "s":
        var audio=new Audio("sounds/drum.wav");
        audio.play();
        break;
  
      case "i":
        var audio=new Audio("sounds/piano.mp3");
        audio.play();
        break;
          
      case "o":
        var audio=new Audio("sounds/violin.wav");
        audio.play();
        break;
        
      case "b":
        var audio=new Audio("sounds/dry-drum.wav");
        audio.play();
        break;
  
      case "n":
        var audio=new Audio("sounds/whitsle.wav");
        audio.play();
        break;
    
      default: console.log(innerHTML);
    }

  }

  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 1000);
  
  }





}







/*
document.querySelector("button").addEventListener("click",handleClick);
//document.querySelector("button).addEventListener("click", function (){ alert("I got clicked!")});
function handleClick(){
  alert("I got clicked!");
}*/


/* 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
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
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}




*/
