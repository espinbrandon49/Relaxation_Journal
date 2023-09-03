import React from 'react'

const Other = ({ tempEntry }) => {
  const name = "other"
  return (
    <div>
      <div>
        <h6>Other</h6>
        <input
          type="radio"
          id={`${name}Y`}
          name={name}
          onClick={() => tempEntry.other = true}
        />
        <label htmlFor={`${name}Y`}>&nbsp; yes</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${name}N`}
          name={`${name}`}
          onClick={() => tempEntry.other = false}
        />
        <label htmlFor={`${name}N`}>&nbsp; no</label>
      </div>
    </div>
  )
}

export default Other