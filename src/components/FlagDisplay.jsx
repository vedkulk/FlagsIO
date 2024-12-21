import React from 'react';

const FlagDisplay = ({ currentFlag }) => {
  return (
    <>
      {currentFlag.svg ? (
        <img
          src={currentFlag.svg}
          className="mt-10 w-[280px] h-[200px] md:w-[500px] md:h-[330px] object-cover rounded-md md:object-cover border-2 border-main"
        />
      ) : (
        <div>Loading...</div> // Show loading if flag is not available
      )}
    </>
  );
};

export default FlagDisplay;
