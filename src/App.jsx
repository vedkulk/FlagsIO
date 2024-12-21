import React, { useState, useEffect } from 'react';
import FlagDisplay from './components/FlagDisplay';
import InputBox from './components/InputBox';
import Header from './components/Header';
import flags from './data/flags.json';

const App = () => {
  const [currentFlag, setCurrentFlag] = useState({ name: '', svg: '' });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Function to set a new random flag
  const setNewFlag = () => {
    const randomCountry = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag({
      name: randomCountry.name.common,
      svg: randomCountry.flags.svg,
    });
  };

  // Set the first flag on initial load
  useEffect(() => {
    setNewFlag();
  }, []);

  const handleGuess = (guess) => {
    if (guess.toLowerCase() === currentFlag.name.toLowerCase()) {
      setScore(score + 1);
      setHighScore(Math.max(highScore, score + 1));
      setNewFlag(); // Generate a new flag after the correct guess
    } else {
      alert(`Incorrect guess! The country was ${currentFlag.name}. Try again.`);
      setScore(0);
      setNewFlag();
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
