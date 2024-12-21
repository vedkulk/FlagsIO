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
    if (guess.toLowerCase().trim() === currentFlag.name.toLowerCase().trim()) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem('score', newScore); // Save score to localStorage

      const updatedHighScore = Math.max(highScore, newScore);
      setHighScore(updatedHighScore);
      localStorage.setItem('highScore', updatedHighScore); // Save high score to localStorage
      setNewFlag(); // Generate a new flag after the correct guess
    } else {
      const newScore = 0;
      setScore(newScore);
      localStorage.setItem('score', newScore)
      alert(`Incorrect guess! The correct country was ${currentFlag.name}. Try again.`);
      setNewFlag()
    }
  };

 

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-stone-800 text-main">
      <Header />
      <div className="mt-10 text-3xl">Score: {score}</div>
      <div className="mt-10 text-3xl">High Score: {highScore}</div>
      <FlagDisplay currentFlag={currentFlag} />
      <InputBox onGuess={handleGuess} />
    </div>
  );
};

export default App;
