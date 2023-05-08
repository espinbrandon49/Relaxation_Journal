import React from 'react'

const userBtns = ({handleShowl, handleShows, handleLogout}) => {
  if (!localStorage.accessToken) {
    return (
      <div className='userBtns'>
        <button className='loginBtn' onClick={handleShowl}>Log In</button>
        <button className='loginBtn' onClick={handleShows}>Sign Up</button>
      </div>
    )
  } else {
    return (
      <div className='userBtns'>
        <button className='logoutBtn' onClick={handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default userBtns