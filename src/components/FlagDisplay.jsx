import React from 'react';

const FlagDisplay = ({ currentFlag }) => {
  return (
    <>
    <div className='mt-10 w-[280px] md:w-[500px] '>
        {currentFlag.svg ? (
          <img
            src={currentFlag.svg}
            className="w-full h-full object-fit rounded-md md:object-fit border-2 border-main"
          />
        ) : (
          <div>Loading...</div> // Show loading if flag is not available
        )}
      </div>
    </>
  );
};

export default FlagDisplay;
