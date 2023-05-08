import React, { useState } from 'react'
import CalmBreathingDiv from './components/CalmBreathingDiv'
import ProgressiveMuscleRelaxationDiv from './components/ProgressiveMuscleRelaxationDiv'
import Exercise from './components/Exercise'
import Other from './components/Other'
import WhatWentWellToday from './components/WhatWentWellToday'
import FeelingDiv from './components/FeelingDiv'
import SubmitButton from './components/SubmitButton'
import Axios from 'axios';

const DailyRelaxationLog = ({handlePageChange}) => {
  
  let tempEntry = {
    calmBreathing: false,
    progressiveMuscleRelaxation: false,
    exercise: false,
    other: false,
    gratitude1: "",
    gratitude2: "",
    gratitude3: "",
    feeling: "",
    postedBy: localStorage.accessToken ? localStorage.accessToken.split("/")[0] : ""
  };

  const [entry, setEntry] = useState({ tempEntry });

  const addEntry = () => {
    Axios.post("https://relaxationjournalapi.onrender.com/api/entry/journal", {
      ...entry
    })
  }

  const addToJournal = (e) => {
    addEntry();
    handlePageChange("relaxationJournal")
    e.preventDefault();
  }

  return (
    <div className='page'>
      <h2>Daily Relaxation Log</h2>
      <form>
        <ul>
          <li className='radios'>
            <CalmBreathingDiv tempEntry={tempEntry} />
            <ProgressiveMuscleRelaxationDiv tempEntry={tempEntry} />
            <Exercise tempEntry={tempEntry} />
            <Other tempEntry={tempEntry} />
          </li>
          <li>
            <WhatWentWellToday tempEntry={tempEntry} />
          </li>
          <li>
            <FeelingDiv tempEntry={tempEntry} />
          </li>
        </ul>
        <SubmitButton addToJournal={addToJournal} />
      </form>
    </div>
  )
}

export default DailyRelaxationLog