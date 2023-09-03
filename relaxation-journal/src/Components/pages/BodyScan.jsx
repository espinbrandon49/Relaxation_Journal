import React from 'react'

const BodyScan = ({page, handlePageChange}) => {
  return (
    <div className='bodyScan'>
      <h2>Body Scan</h2>
      <ol className='single-list'>
        <li>Several times each day (some people even set a reminder on their phone) to stop during the day and take stock of what's going on inside, practice noticing what your body is doing.  This is called a body scan.
          <ul className='nestedLi'>
            <li>Which muscles are tightening?</li>
            <li>What expression is on your face?</li>
            <li>How are you breathing? Fast or slow? Shallow or deep?</li>
            <li>How is your heart rate? Calm? Racing?</li>
            <li>Are your hands warm or cold? Dry or sweaty?</li>
            <li>Is your stomach tied up in a knot?  Feeling sick?</li>
          </ul>
        </li>
        <li> Look at the <strong onClick={() => handlePageChange("feelingWheel")} className='feelingWheelLink'>FEELING WHEEL</strong> and pick out which feeling and the valence (strength) of the feeling that best describes the body sensation you noticed during your body scan.</li>
        <li>Use the feeling wheel as an "ice-breaker" to talk about your feelings with someone important to you.</li>
      </ol>
      
    </div>
  )
}

export default BodyScan