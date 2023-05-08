import React from 'react'

const ProgressiveMuscleRelaxationDiv = ({tempEntry}) => {
  const name = "progressiveMuscleRelaxation";
  return (
    <div>
      <div>
        <h5>Progressive Muscle Relaxation</h5>
        <input
          type="radio"
          id={`${name}Y`}
          name={name}
          onClick={() => tempEntry.progressiveMuscleRelaxation = true}
          />
        <label htmlFor={`${name}Y`}>&nbsp; yes</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${name}N`}
          name={`${name}`}
          onClick={() => tempEntry.progressiveMuscleRelaxation = false}
        />
        <label htmlFor={`${name}N`}>&nbsp; no</label>
      </div>
    </div>
  )
}

export default ProgressiveMuscleRelaxationDiv