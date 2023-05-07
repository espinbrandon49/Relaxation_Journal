import React from 'react'

const NavBar = ({ page, handlePageChange }) => {
  return (
    <nav>
      <div className="logo">
        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user" />
      </div>
      <ul>
        <li onClick={() => handlePageChange("home")}>Home</li>
        <li onClick={() => handlePageChange("reducingTheTension")}>Reducing the Tension</li>
        <li onClick={() => handlePageChange("calmBreathing")}>Calm Breathing</li>
        <li onClick={() => handlePageChange("bodyScan")}>Body Scan</li>
        <li onClick={() => handlePageChange("muscleRelaxationGuide")}>Muscle Relaxation Guide</li>
        <li onClick={() => handlePageChange("dailyRelaxationLog")}>Daily Relaxation Log</li>
        <li onClick={() => handlePageChange("feelingWheel")}> Feeling Wheel</li>
        <li onClick={() => handlePageChange("relaxationJournal")}> Relaxation Journal</li>
      </ul>
    </nav>
  )
}

export default NavBar