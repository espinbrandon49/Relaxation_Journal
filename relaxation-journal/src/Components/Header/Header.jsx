import React, { useState } from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import UserBtns from './components/userBtns';

const Header = () => {
  const showNav = () => document.body.classList.toggle('show-nav');
  
  // login
  const [showl, setShowl] = useState(false);
  const handleClosel = () => setShowl(false);
  const handleShowl = () => setShowl(true);

  // signup
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    window.location.reload()
  }

  return (
    <header>
      <FontAwesomeIcon icon={faBars} className='toggle' onClick={() => showNav()} />
      <h1>Relaxation Journal</h1>
      <p>Each day take stock of what's going on inside of you</p>
      <UserBtns handleShowl={handleShowl} handleShows={handleShows}
      handleLogout={handleLogout}
      />
      <LoginModal show={showl} setShow={setShowl} handleClose={handleClosel} />
      <SignupModal show={shows} setShow={setShows} handleClose={handleCloses} />
    </header>
  )
}

export default Header