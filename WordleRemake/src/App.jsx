import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [wordList, setWordList] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setWordList(json)
      })
  }, [])

  console.log(wordList)
  return (
    <>
      <div className='home-container'> 
        <h1>Wordle</h1>
        <p> Welcome to WORDLE!! In this version of wordle you can choose to play between 4 and 7 letter words</p>
      </div>
      <h3>Choose your word length:</h3>
      <div className="button-container">
        <button className="button-33" role="button">4 Letters</button>
        <button className="button-33" role="button">5 Letters</button>
        <button className="button-33" role="button">6 Letters</button>
        <button className="button-33" role="button">7 Letters</button>
      </div>
    </>
  )
}

export default App
