import { useState, useEffect } from 'react';
import './style.css';

const CalmBreathing = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("relax-container");
  const totalTime = 16000;
  const breatheTime = 4000;
  const holdTime = 4000;

  useEffect(() => {
    breathAnimation()
  }, [])

  function breathAnimation() {
    setText('Breathe In!');
    setSize('relaxer-container grow');

    setTimeout(() => {
      setText('Hold!');
    }, holdTime)

    setTimeout(() => {
      setText('Breathe Out!');
      setSize('relaxer-container shrink');
    }, breatheTime * 2)

    setTimeout(() => {
      setText('Hold!');
    }, holdTime * 3)
  };

  setInterval(breathAnimation, totalTime);

  return (
    <div className='page calmBreathing'>
      <h2>Calm Breathing</h2>
      <h5 className='squareBreathing'>Square Breathing</h5>
      <p >
        Box breathing is a type of meditation that involves breathing in through your nose while visualizing a box with equal sides. The steps are:
      </p>
      {/* <p className='instructions'>How can Learning Calm Breathing Help Me?</p>

      <p>Box breathing, also known as four-square breathing, is a breathing technique that involves counting to four while breathing in and out. The name comes from the fact that a box has four sides, and the technique consists of four distinct phases. </p>

      <p>You can use box breathing to relieve stress, calm down, and maintain focus. It can also help you wind down for sleep.</p> */}

      {/* <p className='instructions'>Calm Breathing Instructions</p> */}
      <ol className='single-list'>
        <li>Close your eyes.</li>
        <li>Breathe in through your nose while counting to four.</li>
        <li>Hold your breath for four seconds.</li>
        <li>Exhale slowly for four seconds.</li>
      </ol>

      <p>
        You can repeat these steps at least three times. You can do box breathing several times a day as needed to calm your nerves and relieve stress.
      </p>

      <p>
        Box breathing can help keep people calm and relaxed while also keeping them alert and focused.
      </p>
      <div className='relaxer'>
        <div className={size} id="relaxer-container">
          <div className="circle"></div>
          <p id="text">{text}</p>

          <div className="pointer-container">
            <span className="pointer"></span>
          </div>

          <div className="gradient-circle"></div>
        </div>
      </div>
      {/* 
      <p>Box breathing is also called “the Navy SEAL breathing technique”. Highly trained military individuals, professional athletes, police officers, and nurses use box breathing to focus before high-pressure situations.</p>

      <p className='instructions'>You can also check out this video:</p>

      <div className='iframe'>
        <iframe width="400" height="400" src="https://www.youtube.com/embed/ummIQOQFHZA" title="Square Breathing (Box Breathing) - Coping Skills for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='push'></div> */}
    </div>
  )
}

export default CalmBreathing