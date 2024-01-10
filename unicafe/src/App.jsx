import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticsLine = ({count, text}) => (
  <p>{text} {count}</p>
)

const Statistics = (p) => {
  if (p.total !== 0) {
    return (
      <>
        <StatisticsLine count={p.good} text="good" />
        <StatisticsLine count={p.neutral} text="neutral" />
        <StatisticsLine count={p.bad} text="bad" />
        <StatisticsLine count={p.total} text="total" />
        <StatisticsLine count={p.average} text="average" />
        <StatisticsLine count={p.positive} text="positive" />
      </>
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
  const average = total !== 0 ? (good - bad) / total : 0
  const positive = total !==0 ? good / total + " %" : "N/A"

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