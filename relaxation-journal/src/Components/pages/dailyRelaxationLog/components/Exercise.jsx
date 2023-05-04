import React from 'react'

const Exercise = () => {
  const name = "exercise"
  return (
    <div>
      <div>
        <h5>Exercise</h5>
        <input
          type="radio"
          id={`${name}Y`}
          name={name} />
        <label htmlFor={`${name}Y`}>yes</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${name}N`}
          name={`${name}`}
        />
        <label htmlFor={`${name}N`}>no &nbsp;</label>
      </div>
    </div>
  )
}

export default Exercise