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
    const sanitizedGuess = guess.toLowerCase().trim(); // Sanitize user input
    const correctAnswer = currentFlag.name.toLowerCase().trim(); // Sanitize flag name
  
    if (sanitizedGuess === correctAnswer) {
      // Correct guess logic
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem('score', newScore);
  
      const updatedHighScore = Math.max(highScore, newScore);
      setHighScore(updatedHighScore);
      localStorage.setItem('highScore', updatedHighScore);
  
      setNewFlag(); // Generate a new flag
    } else if (sanitizedGuess === "") {
      // Empty input alert
      alert("Please do not leave the input blank.");
    } else {
      // Incorrect guess logic
      const newScore = 0;
      setScore(newScore);
      localStorage.setItem('score', newScore);
  
      alert(`Incorrect guess! The correct country was ${currentFlag.name}. Try again.`);
      setNewFlag(); // Generate a new flag
    }
  };
  
 

  return (
    <div className="fixed w-screen h-screen flex flex-col items-center bg-stone-800 text-main">
      <Header />
      <div className="mt-20 text-xl">Score: {score}</div>
      <div className="mt-2 text-xl">High Score: {highScore}</div>
      <FlagDisplay currentFlag={currentFlag} />
      <InputBox onGuess={handleGuess} />
    </div>
  );
};

export default App;
