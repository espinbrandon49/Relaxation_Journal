// const container = document.getElementById('relaxer-container'),
//   text = document.getElementById('text');

// const totalTime = 16000;
// const breatheTime = 4000;
// const holdTime = 4000;

breathAnimation()

function breathAnimation() {
  const container = document.getElementById('relaxer-container'),
    text = document.getElementById('text');

  const totalTime = 16000;
  const breatheTime = 4000;
  const holdTime = 4000;

  text.innerText = 'Breathe In!';
  container.className = 'relaxer-container grow';

  setTimeout(() => {
    text.innerText = 'Hold!'
  }, holdTime)

  setTimeout(() => {
    text.innerText = 'Breathe Out!'
    container.className = 'relaxer-container shrink';
  }, breatheTime * 2)

  setTimeout(() => {
    text.innerText = 'Hold!'
  }, holdTime * 3)
}; setInterval(breathAnimation, 16000);