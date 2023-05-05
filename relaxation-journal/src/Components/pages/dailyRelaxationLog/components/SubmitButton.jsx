import React from 'react'

const SubmitButton = ({addToJournal}) => {
  return (
    <div className='button'>
      <button className='addEntry' onClick={addToJournal}>Add Entry to Journal</button>
    </div>
  )
}

export default SubmitButton