import React from 'react'
import DaysOfTheWeekRow from './components/DaysOfTheWeekRow'
import CalmBreathingRow from './components/CalmBreathingRow'
import ProgressiveMuscleRelaxationRow from './components/ProgressiveMuscleRelaxationRow'

const DailyRelaxationLog = () => {
  return (
    <div className='page'>
      <h2>Daily Relaxation Log</h2>
      <table>
        <DaysOfTheWeekRow/>
        <CalmBreathingRow/>
        <ProgressiveMuscleRelaxationRow/>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  )
}

export default DailyRelaxationLog