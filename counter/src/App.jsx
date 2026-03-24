import { useState } from 'react'

function App() {

  let [count, setCount] = useState(0)

  const addVal = () => {
    if (count >= 0 && count < 20) {
      setCount(count + 1)
    }
  }

  const remVal = () => {
    if (count <= 20 && count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">

      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl text-center w-80">

        <h1 className="text-3xl font-bold mb-6">
          Counter Value
        </h1>

        <p className="text-5xl font-extrabold mb-8 text-blue-400">
          {count}
        </p>

        <div className="flex gap-4 justify-center">

          <button
            onClick={addVal}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-xl shadow-md transition duration-200"
          >
            Increase
          </button>

          <button
            onClick={remVal}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-xl shadow-md transition duration-200"
          >
            Decrease
          </button>

        </div>

      </div>

    </div>
  )
}

export default App