const FeelingWheel = ({ page, handlePageChange }) => {
  return (
    <div className='feelingWheel'>
      <h2>Feeling Wheel</h2>
      <p>
        Record how you feel in the <strong onClick={() => handlePageChange("dailyRelaxationLog")} className='feelingWheelLink'>DAILY RELAXATION LOG</strong>
      </p>
      <img className='feelingWheel-img' src={require('../../images/feelingWheel.png')} />
    </div>
  )
}

export default FeelingWheel