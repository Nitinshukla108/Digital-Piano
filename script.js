

// Sab keys (white + black) jinpe sound chahiye
const keys = document.querySelectorAll('.key');

// File names start from 28.mp3
const START_NUMBER = 28;

keys.forEach((key, index) => {
  const soundNumber = START_NUMBER + index; 

  key.addEventListener('click', () => {
    const audio = new Audio(`audio/${soundNumber}.mp3`);
    audio.currentTime = 0;
    audio.play();
  });
});
