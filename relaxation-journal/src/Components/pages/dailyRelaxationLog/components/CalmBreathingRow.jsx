import React from 'react'

const CalmBreathingRow = () => {
  return (
    <tr className='calmBreathingRow'>
      <th className='thtr'>Calm Breathing</th>
      <td>
        <div>
          <input
            type="radio"
            id="M-calmBreathingYes"
            name="M-calmBreathing" />
          <label for="M-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="M-calmBreathingNo"
            name="M-calmBreathing"
            checked 
            />
          <label for="M-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="T-calmBreathingYes"
            name="T-calmBreathing" />
          <label for="T-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="T-calmBreathingNo"
            name="T-calmBreathing"
            checked 
            />
          <label for="T-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="W-calmBreathingYes"
            name="W-calmBreathing" />
          <label for="W-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="W-calmBreathingNo"
            name="W-calmBreathing"
            checked 
            />
          <label for="W-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="Th-calmBreathingYes"
            name="Th-calmBreathing" />
          <label for="Th-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="Th-calmBreathingNo"
            name="Th-calmBreathing"
            checked 
            />
          <label for="Th-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="F-calmBreathingYes"
            name="F-calmBreathing" />
          <label for="F-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="F-calmBreathingNo"
            name="F-calmBreathing"
            checked />
          <label for="F-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="S-calmBreathingYes"
            name="S-calmBreathing" />
          <label for="S-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="S-calmBreathingNo"
            name="S-calmBreathing"
            checked />
          <label for="S-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>

      <td>
        <div>
          <input
            type="radio"
            id="Sn-calmBreathingYes"
            name="Sn-calmBreathing" />
          <label for="Sn-calmBreathingYes" >yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="Sn-calmBreathingNo"
            name="Sn-calmBreathing"
            checked />
          <label for="Sn-calmBreathingNo">no &nbsp;</label>
        </div>
      </td>
    </tr>
  )
}

export default CalmBreathingRow