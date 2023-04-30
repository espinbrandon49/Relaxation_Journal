import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faBars} />
      <h1>Relaxion Journal</h1>
      <p>Each day take stock of what's going on inside of you</p>
    </header>

  )
}

export default Header