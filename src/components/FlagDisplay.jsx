import React from 'react'

const FlagDisplay = () => {
  return (
    <div className='mt-10 w-[250px] h-[200px] md:w-[500px] md:h-[330px] border-2 border-main '>
      <img 
        src='https://flagcdn.com/in.svg' 
        className="w-full h-full object-cover"
        alt="Indian flag"
      />
    </div>
  )
}

export default FlagDisplay