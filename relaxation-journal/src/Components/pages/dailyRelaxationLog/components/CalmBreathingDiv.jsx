import React from 'react'

const CalmBreathingDiv = ({ tempEntry }) => {
  const name = "calmBreathing";

  return (
    <div>
      <div>
        <h5>Calm Breathing</h5>
        <input
          type="radio"
          id={`${name}Y`}
          name={name}
          onClick={() => tempEntry.calmBreathing = true}
        />
        <label htmlFor={`${name}Y`}>&nbsp; yes</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${name}N`}
          name={`${name}`}
          onClick={() => tempEntry.calmBreathing = false}
        />
        <label htmlFor={`${name}N`}>&nbsp; no</label>
      </div>
    </div>
  )
}

export default CalmBreathingDiv