import React, { useState, useEffect } from 'react';
import FlagDisplay from './components/FlagDisplay';
import InputBox from './components/InputBox';
import Header from './components/Header';
import flags from './data/flags.json';

const App = () => {
  const [currentFlag, setCurrentFlag] = useState({ name: '', svg: '' });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Fetch scores from localStorage on initial load
  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    const storedHighScore = localStorage.getItem('highScore');
    if (storedScore) setScore(parseInt(storedScore, 10));
    if (storedHighScore) setHighScore(parseInt(storedHighScore, 10));
    setNewFlag();
  }, []);

  // Function to set a new random flag
  const setNewFlag = () => {
    const randomCountry = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag({
      name: randomCountry.name.common,
      svg: randomCountry.flags.svg,
    });
  };

  // Function to handle guesses
  const handleGuess = (guess) => {
    const sanitizedGuess = guess.toLowerCase().trim(); 
    const correctAnswer = currentFlag.name.toLowerCase().trim(); 
  
    if (sanitizedGuess === correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem('score', newScore);
  
      const updatedHighScore = Math.max(highScore, newScore);
      setHighScore(updatedHighScore);
      localStorage.setItem('highScore', updatedHighScore);
  
      setNewFlag(); 
    } else if (sanitizedGuess === "") {
      alert("Please do not leave the input blank.");
    } else {
      const newScore = 0;
      setScore(newScore);
      localStorage.setItem('score', newScore);
  
      alert(`Incorrect guess! The correct country was ${currentFlag.name}. Try again.`);
      setNewFlag(); 
    }
  };
  
 

  return (
    <div className="font-montserrat fixed w-screen h-screen flex flex-col items-center bg-stone-800 text-main">
      <Header />
      <div className="mt-20 xl:text-2xl text-xl">Current Score: {score}</div>
      <div className="mt-2 xl:text-2xl text-xl">High Score: {highScore}</div>
      <FlagDisplay currentFlag={currentFlag} />
      <InputBox onGuess={handleGuess} />
    </div>
  );
};

export default App;
