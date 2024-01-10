import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = ({count, name}) => (
  <p>{name} {count}</p>
)

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
      <Statistics count={good} name="good" />
      <Statistics count={neutral} name="neutral" />
      <Statistics count={bad} name="bad" />
      <Statistics count={total} name="total" />
      <Statistics count={average} name="average" />
      <Statistics count={positive} name="positive" />
    </>
  )
}

export default App