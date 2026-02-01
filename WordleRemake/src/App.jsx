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
    </>
  )
}

export default App
