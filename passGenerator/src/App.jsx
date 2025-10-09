import { useState , useCallback, useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [Password, setPassoword] = useState("")

  let passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)  str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()_"
    for(let i=0 ; i<=length ; i++)
    {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char) ;
    }
    setPassoword(pass)
  },[length,numAllowed,charAllowed])

  const passwordRef = useRef(null)

  const copyPassToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  useEffect(()=>{
    passwordGenerator()
  }, [length,numAllowed,charAllowed])

  return (
    <>
      <div className="h-screen w-full bg-[#1D1A31] flex justify-center items-center">
  <div className="w-[600px] bg-gray-200 p-5 rounded-lg flex justify-center items-center flex-wrap">
       <p className="text-3xl font-extrabold text-[#41337A] tracking-wide mb-2 font-mono"> Password Generator </p>
    <div className="w-full bg-[#9395D3] p-2 rounded-lg flex justify-between items-center">
      <input 
        type="text"
        value={Password}
        readOnly
        placeholder="Password" 
        ref={passwordRef}
        className="w-full h-12 px-4 rounded-l-lg bg-[#FBF9FF] outline-none text-gray-800 placeholder-gray-400"
      />
      <button 
        className="bg-[#41337A] h-12 px-6 text-white font-semibold rounded-r-lg hover:bg-[#2d2559] transition-all duration-300 cursor-pointer"
        onClick={copyPassToClipBoard}
      >Copy
      </button>
    </div>
    <div className="flex gap-x-10 text-xl justify-center items-center gap-2.5 mt-4"> 
        <div className=" flex justify-center items-center gap-x-1 text-[#41337A] "><input
        type="range"
         value={length}
         min={8}
         max={100}
          className="cursor-pointer accent-[#41337A]" 
          onChange={(e) => {setLength(e.target.value)}}
        /> <label> Length : {length}</label> </div>
        <div className="flex justify-center items-center gap-x-1 text-[#41337A] " id='charInput'> <input   type="checkbox" className="cursor-pointer"
        defaultChecked = {charAllowed} 
        onChange={() => {
              setCharAllowed((prev) => !prev);
          }}
        /> <label htmlFor="charInput">Characters</label></div>
         
        
         <div className="flex justify-center items-center gap-x-1 text-[#41337A]" id='numberInput'> <input id='numberInput'  type="checkbox" className="cursor-pointer" 
         defaultChecked = {numAllowed} 
        onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
        /> <label htmlFor="numberInput">Numbers</label></div>
        
        
    </div>
   
  </div>
</div>


    </>
  )
}

export default App
