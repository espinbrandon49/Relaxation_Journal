import React from 'react'

const userBtns = ({handleShowl, handleShows, handleLogout}) => {
  if (!localStorage.accessToken) {
    return (
      <div className='userBtns'>
        <button className='custom-btn' onClick={handleShowl}>Log In</button>
        <button className='custom-btn' onClick={handleShows}>Sign Up</button>
      </div>
    )
  } else {
    return (
      <div className='userBtns'>
        <button className='custom-btn' onClick={handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default userBtns