import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const JournalEntries = () => {
  const [data, setData] = useState([]);

  function dateFormat() {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/entry/journal")
      .then((response) => {
        setData(response.data)
      })
  }, [])

  return (
    <>
      {data.map((item, i) => {
        return (
          <Accordion flush className="accordian" defaultActiveKey={`${data.length - 1}`}>
            <Accordion.Item eventKey={`${i}`}>
              <Accordion.Header>{dateFormat(item.createdAt)}</Accordion.Header>
              <Accordion.Body>
                <div><em>Feeling: {item.feeling}</em></div>
                <p className='Jradios'>
                  <div>Calm Breathing: {item.calmBreathing ? "YES" : "NO"}</div>
                  <div>Muscle Relaxation: {item.progressiveMuscleRelaxation ? "YES" : "NO"}</div>
                  <div>Exercise: {item.exercise ? "YES" : "NO"}</div>
                  <div>Other: {item.other ? "YES" : "NO"}</div>
                </p>
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
}

export default JournalEntries