import React from 'react'
import JournalEntries from "./JournalEntries"

const RelaxationJournal = ({ page, handlePageChange }) => {

  return (
    <div className='page relaxationJournal'>
      <h2>Relaxation Journal</h2>
      <JournalEntries page={page} handlePageChange={handlePageChange}/>
    </div>
  )
}

export default RelaxationJournal
