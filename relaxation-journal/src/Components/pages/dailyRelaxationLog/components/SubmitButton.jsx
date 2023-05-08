import React from 'react'

const SubmitButton = ({ addToJournal }) => {
  if (localStorage.accessToken) {
    return (
      <div className='button'>
        <button className='addEntry' onClick={addToJournal}>Add Entry to Journal</button>
      </div>
    )
  } else {
    return (
      <div className='button'>
        <button className='addEntry' disabled>Log In to Add Entry</button>
      </div>
    )
  }

}

export default SubmitButton