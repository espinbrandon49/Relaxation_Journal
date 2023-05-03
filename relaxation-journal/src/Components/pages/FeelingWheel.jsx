import React from 'react'

const FeelingWheel = ({page, handlePageChange}) => {
  return (
    <div className='page feelingWheel'>
      Record how you feel in the <strong onClick={() => handlePageChange("dailyRelaxationLog")} className='feelingWheelLink'>DAILY RELAXATION LOG</strong> 
    </div>
  )
}

export default FeelingWheel