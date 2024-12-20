import React from 'react'
import { useState } from 'react'
import FlagDisplay from './components/FlagDisplay'
import Header from './components/Header'

const App = () => {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  return (
    <>
    <div className='w-screen h-screen flex flex-col items-center bg-stone-800 text-main'>
      <Header/>
      <div className='mt-10 text-3xl'>
        Score: {score}
      </div>
      <div className='mt-10 text-3xl'>
        High Score: {highScore}
      </div>
    <FlagDisplay/>
    </div>
    </>
  )
}

export default App