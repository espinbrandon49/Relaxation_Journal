import React from 'react'

const WhatWentWellToday = () => {
  return (
    <div>
      <h5>What went well today:</h5>
      <ol className='whatWentWellToday'>
        <li>
          <textarea placeholder='Today I achieved...'></textarea>
        </li>
        <li>
          <textarea placeholder='Today I accomplished...'></textarea>
        </li>
        <li>
          <textarea placeholder='Today I started...'></textarea>
        </li>
      </ol>
  </div>
  )
}

export default WhatWentWellToday