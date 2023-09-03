import React from 'react'

const WhatWentWellToday = ({tempEntry}) => {
  return (
    <div>
      <h6>What went well today:</h6>
      <ol className='whatWentWellToday'>
        <li>
          <textarea 
          onChange={(e) => tempEntry.gratitude1 = e.target.value}
          placeholder='Today I achieved...'></textarea>
        </li>
        <li>
          <textarea
          onChange={(e) => tempEntry.gratitude2 = e.target.value}
          placeholder='Today I accomplished...'></textarea>
        </li>
        <li>
          <textarea 
          onChange={(e) => tempEntry.gratitude3 = e.target.value}
          placeholder='Today I started...'></textarea>
        </li>
      </ol>
  </div>
  )
}

export default WhatWentWellToday