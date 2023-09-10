import { useReducer, useRef } from 'react';
import './style.css';
// import script from './script.js';

const CalmBreathing = () => {

  // script.breathAnimation();
  const container = useRef();
  const textRef = useRef();

  breathAnimation()

  function breathAnimation() {
    // const container = document.getElementById('relaxer-container'),
    //   text = document.getElementById('text');

    const totalTime = 16000;
    const breatheTime = 4000;
    const holdTime = 4000;

    // textRef.innerText = 'Breathe In!';
    textRef.textContent = 'Breathe In!'
    container.className = 'relaxer-container grow';

    setTimeout(() => {
      // textRef.innerText = 'Hold!'
      textRef.textContent = 'Hold!'
    }, holdTime)

    setTimeout(() => {
      // textRef.innerText = 'Breathe Out!'
      textRef.textContent = 'Breathe Out!'
      container.className = 'relaxer-container shrink';
    }, breatheTime * 2)

    setTimeout(() => {
      // textRef.innerText = 'Hold!'
      textRef.textContent = 'Hold!'
    }, holdTime * 3)
  }; setInterval(breathAnimation, 16000);

  return (
    <div className='page calmBreathing'>
      <h2>Calm Breathing</h2>
      <h5 className='squareBreathing'>Square Breathing</h5>
      <p className='instructions'>How can Learning Calm Breathing Help Me?</p>

      <p>Box breathing, also known as four-square breathing, is a breathing technique that involves counting to four while breathing in and out. The name comes from the fact that a box has four sides, and the technique consists of four distinct phases. </p>

      <p>You can use box breathing to relieve stress, calm down, and maintain focus. It can also help you wind down for sleep.</p>

      <p className='instructions'>Calm Breathing Instructions</p>
      <ol className='single-list'>
        <li>Close your eyes.</li>
        <li>Breathe in through your nose while counting to four.</li>
        <li>Hold your breath for four seconds.</li>
        <li>Exhale slowly for four seconds.</li>
        <li>Repeat steps 1 through 4 at least three times.</li>
      </ol>

      <div className='relaxer'>
        <div className="relaxer-container" id="relaxer-container" ref={container}>
          <div className="circle"></div>
          <p id="text" ref={textRef}>Breath In!</p>

          <div className="pointer-container">
            <span className="pointer"></span>
          </div>

          <div className="gradient-circle"></div>
        </div>
      </div>

      <p>Box breathing is also called “the Navy SEAL breathing technique”. Highly trained military individuals, professional athletes, police officers, and nurses use box breathing to focus before high-pressure situations.</p>

      <p className='instructions'>You can also check out this video:</p>

      <div className='iframe'>
        <iframe width="400" height="400" src="https://www.youtube.com/embed/ummIQOQFHZA" title="Square Breathing (Box Breathing) - Coping Skills for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default CalmBreathing