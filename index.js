for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play sound
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keypress",(e)=>{
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key){
      

    switch (key) {
      case "w":
        let tom1 = new Audio("tom-1.mp3");
        tom1.play();

        break;
      case "a":
        let tom2 = new Audio("tom-2.mp3");
        tom2.play();

        break;
      case "s":
        let tom3 = new Audio("tom-3.mp3");
        tom3.play();

        break;
      case "d":
        let tom4 = new Audio("tom-4.mp3");
        tom4.play();

        break;
      case "j":
        let snare = new Audio("snare.mp3");
        snare.play();

        break;
      case "k":
        let kick = new Audio("kick-bass.mp3");
        kick.play();

        break;
      case "l":
        let crash = new Audio("crash.mp3");
        crash.play();

        break;
      default: 
        break;
    }
}
function buttonAnimation(currentKey){
  let activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  } , 1000);

}
