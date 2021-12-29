import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getData } from './services/service'
import Results from './components/Results'
import { datesAreValid } from './functions/functions'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [notification, setNotification] = useState(null)

  const [results, setResults] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if dates are valid
    if (datesAreValid(startDate, endDate)) {
      const data = await getData(startDate, endDate)
      setResults(data)
    } else {
      setResults(null)
      setNotification('Dates are not valid!!')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }
  return (
    <div className="App">
      <h1>Scrooge McDuck Bitcoin Analyzer</h1>
      <p>Pick a date range:</p>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            marginBottom: '10px',
          }}
        >
          <div>
            <p>From:</p>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div>
            <p>Until:</p>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            border: 'none',
            background: '#1f78ff',
            color: 'white',
            padding: '20px 30px',
            cursor: 'pointer',
            borderRadius: '15px',
          }}
        >
          Show results
        </button>
      </form>
      {notification ? (
        <p style={{ color: 'red', fontSize: '25px' }}>{notification}</p>
      ) : null}
      {results && (
        <Results results={results} endDate={endDate} startDate={startDate} />
      )}
    </div>
  )
}

export default App
