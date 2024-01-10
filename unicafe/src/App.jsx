import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticsLine = ({value, text}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (p) => {
  if (p.total !== 0) {
    return (
      <table>
        <tbody>
          <StatisticsLine value={p.good} text="good" />
          <StatisticsLine value={p.neutral} text="neutral" />
          <StatisticsLine value={p.bad} text="bad" />
          <StatisticsLine value={p.total} text="total" />
          <StatisticsLine value={p.average} text="average" />
          <StatisticsLine value={p.positive} text="positive" />
        </tbody>
      </table>
    )
  }
  return (
    <p>No f*cks given yet (sorry)</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = Math.round((good - bad) / total * 100) / 100
  const positive = Math.round(good / total * 100) + " %"

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </>
  )
}

export default App