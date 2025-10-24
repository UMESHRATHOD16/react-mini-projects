import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900">
            <h1 className="text-4xl font-bold text-blue-400">
             Tailwind CSS is Working 🚀
            </h1>
      </div>
    </>
  )
}

export default App
