import React from 'react'

const FeelingDiv = () => {
  return (
    <div>
      <div className='feeling'>
        <label for="feeling" ><strong>How are you feeling today?</strong></label>
        <input type='text' id='feeling' placeholder='I feel...'/>
      </div>
    </div>
  )
}
export default FeelingDiv