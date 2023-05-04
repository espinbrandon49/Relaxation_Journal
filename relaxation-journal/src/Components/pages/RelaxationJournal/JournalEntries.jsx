import React, { useEffect, useState } from 'react'
import Axios from 'axios';

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

  console.log(data.map(e => e))
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i} >{dateFormat(item.createdAt)}</div>
        )
      })}
    </div>

  )
}

export default JournalEntries