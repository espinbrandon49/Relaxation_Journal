import React, { useState } from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

const Header = () => {
  const showNav = () => {
    document.body.classList.toggle('show-nav');
  }

  // login
  const [showl, setShowl] = useState(false);
  const handleClosel = () => setShowl(false);
  const handleShowl = () => setShowl(true);

  // signup
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  return (
    <header>
      <FontAwesomeIcon icon={faBars} className='toggle' onClick={() => showNav()} />
      <h1>Relaxation Journal</h1>
      <p>Each day take stock of what's going on inside of you</p>
      <div className='userBtns'>
        <button className='loginBtn' onClick={handleShowl}>Log In</button>
        <button className='loginBtn' onClick={handleShows}>Signup</button>
      </div>
      <LoginModal show={showl} setShow={setShowl} handleClose={handleClosel} />
      <SignupModal show={shows} setShow={setShows} handleClose={handleCloses} />
    </header>
  )
}

export default Header