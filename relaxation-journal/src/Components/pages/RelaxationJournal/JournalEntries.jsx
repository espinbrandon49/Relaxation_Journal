import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { dateFormat } from '../../../helpers/dateFormat';

const JournalEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/entry/journal")
      .then((response) => {
        if (localStorage.accessToken) {
          const user = localStorage.accessToken.split("/")[0]
          setData(response.data.filter(e => e.postedBy._id === user))
        }
      })
  }, [])

  // console.log(data)
  if (data.length > 0) {
    return (
      <>
        {data.map((item, i) => {
          return (
            <Accordion key={i} flush className="accordian" defaultActiveKey={`${data.length - 1}`}>
              <Accordion.Item eventKey={`${i}`}>
                <Accordion.Header>{dateFormat(item.createdAt)}</Accordion.Header>
                <Accordion.Body>
                  <div><em>Feeling: {item.feeling}</em></div>
                  <div className='Jradios'>
                    <div>Calm Breathing: {item.calmBreathing ? "YES" : "NO"}</div>
                    <div>Muscle Relaxation: {item.progressiveMuscleRelaxation ? "YES" : "NO"}</div>
                    <div>Exercise: {item.exercise ? "YES" : "NO"}</div>
                    <div>Other: {item.other ? "YES" : "NO"}</div>
                  </div>
                  <div>What Went Well Today</div>
                  <ol className='JwhatWentWellToday'>
                    <li>{item.gratitude1}</li>
                    <li>{item.gratitude2}</li>
                    <li>{item.gratitude3}</li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        }).reverse()}
      </>
    )
  } else {
    return (
      <div className='display-5 text-center'>Log In or Sign Up to <em>start relaxing</em></div>
    )
  }

}

export default JournalEntries