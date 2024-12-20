import React from 'react'
import flags from '../data/flags.json';

// Example: Accessing the data

const FlagDisplay = () => {
    console.log(flags[0].name.common);
    const flagImg = flags[5].flags.svg 

  return (
    <div className='mt-10 w-[250px] h-[200px] md:w-[500px] md:h-[330px] border-2 border-main '>
      <img 
        src={flagImg}
        className="w-full h-full object-cover"
        alt="Indian flag"
      />
    </div>
  )
}

export default FlagDisplay