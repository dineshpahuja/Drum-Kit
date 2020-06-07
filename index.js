// Detecting Button pressed using Mouse
document.querySelectorAll('.drum').forEach((ele) => {
  ele.addEventListener('click', function() {
    selectTrack(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

// Detecting Keyboard key press
document.addEventListener('keydown', function(event) {
  selectTrack(event.key);
  buttonAnimation(event.key);
});

function selectTrack(key) {
  let trak = "";
  switch (key) {
    case 'w':
      track = 'sounds/tom-1.mp3';
      break;
    case 'a':
      track = 'sounds/tom-2.mp3';
      break;
    case 's':
      track = 'sounds/tom-3.mp3';
      break;
    case 'd':
      track = 'sounds/tom-4.mp3';
      break;
    case 'j':
      track = 'sounds/snare.mp3';
      break;
    case 'k':
      track = 'sounds/crash.mp3';
      break;
    case 'l':
      track = 'sounds/kick-bass.mp3';
      break;
    default:
      console.log(this.innerHTML);
  }
  let audio = new Audio(track);
  audio.play();
}

function buttonAnimation(key){
  let activeBtn = document.querySelector('.'+key);
  activeBtn.classList.add('pressed');
  setTimeout(function(){
    activeBtn.classList.remove('pressed');
  },100);
}
