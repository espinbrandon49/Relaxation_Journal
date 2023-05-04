import React from 'react'
import CalmBreathingDiv from './components/CalmBreathingDiv'
import ProgressiveMuscleRelaxationDiv from './components/ProgressiveMuscleRelaxationDiv'
import Exercise from './components/Exercise'
import Other from './components/Other'
import WhatWentWellToday from './components/WhatWentWellToday'
import FeelingDiv from './components/FeelingDiv'
import SubmitButton from './components/SubmitButton'
const DailyRelaxationLog = () => {

  return (
    <div className='page'>
      <h2>Daily Relaxation Log</h2>
      <form>
        <ul>
          <li className='radios'>
            <CalmBreathingDiv />
            <ProgressiveMuscleRelaxationDiv />
            <Exercise />
            <Other />
          </li>
          <li>
            <WhatWentWellToday />
          </li>
          <li>
            <FeelingDiv/>
          </li>
        </ul>
        <SubmitButton/>
      </form>
    </div>
  )
}

export default DailyRelaxationLog