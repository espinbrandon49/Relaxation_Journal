import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  const showNav = () => {
    document.body.classList.toggle('show-nav');
  }

  return (
    <header>
      <FontAwesomeIcon icon={faBars} className='toggle' onClick={() => showNav()}/>
      <h1>Relaxation Journal</h1>
      <p>Each day take stock of what's going on inside of you</p>
    </header>

  )
}

export default Header