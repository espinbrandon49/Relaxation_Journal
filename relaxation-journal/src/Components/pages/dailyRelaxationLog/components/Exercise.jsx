import React from 'react'

const Exercise = ({ tempEntry }) => {
  const name = "exercise"
  return (
    <div>
      <div>
        <h6>Exercise</h6>
        <input
          type="radio"
          id={`${name}Y`}
          name={name}
          onClick={() => tempEntry.exercise = true}
        />
        <label htmlFor={`${name}Y`}>&nbsp; yes</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${name}N`}
          name={`${name}`}
          onClick={() => tempEntry.exercise = false}
        />
        <label htmlFor={`${name}N`}>&nbsp; no</label>
      </div>
    </div>
  )
}

export default Exercise