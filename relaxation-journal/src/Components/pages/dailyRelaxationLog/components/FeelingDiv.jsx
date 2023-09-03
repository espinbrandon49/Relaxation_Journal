import React from 'react'

const FeelingDiv = ({ tempEntry, handlePageChange }) => {
  return (
    <div>
      <div className='feeling'>
        <div className='feeling-div-label'>
          <h6><label htmlFor="feeling" ><strong>How are you feeling today?</strong></label></h6>
          <strong onClick={() => handlePageChange("feelingWheel")} className='feelingWheelLink text-center'>FEELING WHEEL</strong>
        </div>
        <input
          type='text'
          id='feeling'
          placeholder='I feel...'
          onChange={(e) => tempEntry.feeling = e.target.value}
        />
      </div>
    </div>
  )
}
export default FeelingDiv