import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("White")

  return (
    <div className="h-screen w-full duration-200 flex flex-col justify-end items-center" style={{ backgroundColor: color }}>
      <div className="buttonContainer flex h-12 w-80 justify-evenly gap-2 rounded-2xl bg-gray-300 mb-10">
        <button onClick={() => setColor("blue")} className="rounded-2xl bg-blue-500 text-white px-4 py-2">Blue</button>
        <button onClick={() => setColor("black")} className="rounded-2xl bg-black text-white px-4 py-2">Black</button>
        <button onClick={() => setColor("green")} className="rounded-2xl bg-green-600 text-white px-4 py-2">Green</button>
        <button onClick={() => setColor("red")} className="rounded-2xl bg-red-500 text-white px-4 py-2">Red</button>
      </div>
    </div>
  )
}

export default App
