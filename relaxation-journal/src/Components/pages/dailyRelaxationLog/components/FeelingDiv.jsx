import React from 'react'

const FeelingDiv = ({tempEntry}) => {
  return (
    <div>
      <div className='feeling'>
        <label htmlFor="feeling" ><strong>How are you feeling today?</strong></label>
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