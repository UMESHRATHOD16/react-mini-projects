import { useState } from 'react'
import "tailwindcss";
import Card from './components/Card'
import useJoke from './hooks/useJokes';

function App() {
  const [trigger, setTrigger] = useState(0)
  const { joke, loading } = useJoke(trigger)

  return (
    <>
  <div className="grid grid-cols-2 place-items-center h-screen w-full gap-6">
  <Card num={1} joke={joke} loading={loading}/>
  <Card num={2} joke={joke} loading={loading}/>
  <Card num={3} joke={joke} loading={loading}/>
  <Card num={4} joke={joke} loading={loading}/>
  <div className="col-span-2 flex justify-center items-center mt-4">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md 
                       hover:bg-blue-600 active:scale-95 transition duration-200"
                       onClick={() => setTrigger(prev => prev + 1)}>
      Get Jokes
    </button>
  </div>
</div>
    </>
  )
}
export default App
