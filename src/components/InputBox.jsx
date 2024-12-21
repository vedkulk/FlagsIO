import React, { useState } from 'react';

const InputBox = ({ onGuess }) => {
  const [userInput, setUserInput] = useState('');

  const handleGuess = () => {
    onGuess(userInput);
    setUserInput(''); // Clear input field after submitting
  };

  // Handle key press for Enter/Return key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };


  return (
    <div className="w-full max-w-[500px] mx-auto my-5">
      <div className="flex flex-col items-center mx-5">
        <input
          type="text"
          className="w-full h-[48px] border-2 border-stone-700 bg-stone-700 text-main px-4 text-lg placeholder-gray-400 outline-none rounded mb-3"
          placeholder="Enter a country"
          aria-label="Country input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="w-full h-[48px] border-2 border-border hover:bg-border text-white py-2 text-lg rounded"
          aria-label="Submit your guess"
          onClick={handleGuess}
        >
          Guess
        </button>
      </div>
    </div>
  );
};

export default InputBox;