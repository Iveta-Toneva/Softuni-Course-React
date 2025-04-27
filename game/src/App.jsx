import {  useState } from 'react'
import './App.css'

function App() {

  const [startGame, setStartGame] = useState(false);
  const [points, setPoints] = useState(0);
 

  const setGame = () => {
    setStartGame((state => !state));
  }

  const collectPoint = () => {
    setPoints((state) => state + 1);
  }

  return (
    <>
      <div>Points : {points}</div>
      <div className='sky'>
        <button onClick={setGame}>Start game</button>
      </div>
      <div className='water'>
      </div>
      {startGame &&
        <div className='duck'>
          <img onClick={collectPoint} src='./duck.png' alt="" />
        </div>
      }

    </>
  )
}

export default App
