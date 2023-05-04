import React from 'react'

const ProgressiveMuscleRelaxationDiv = () => {
  const name = "progressiveMuscleRelaxation";
  return (
    <div>
      <div>
        <h5>Progressive Muscle Relaxation</h5>
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

export default ProgressiveMuscleRelaxationDiv