import React from 'react'

function Card({joke,num,loading}) {
  const displayJoke = loading
    ? "Loading.."
    : joke === null || joke === undefined
      ? "No joke available"
      : (typeof joke === 'object' ? JSON.stringify(joke) : joke)

  return (
  <div className="text-white rounded-3xl h-48 w-150 flex items-center px-4 gap-4 bg-[#D66BA0]">
    <div className="bg-[#9DF7E5] text-black h-40 w-24 rounded-xl flex justify-center items-center text-xl font-bold">
      {num}
    </div>
    <div className="flex-1">
      <p className="text-lg">
        {displayJoke}
      </p>
    </div>
  </div>
  )
}

export default Card