import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>

    <button onClick={() => {
      console.log("increase가 클릭됨")
       setCount((count) => count + 1)
    }}>
          +1
        </button>

        <button onClick={() => {
          console.log("decrease가 클릭됨")
          setCount((count) => count - 1)
        }}>
          -1
        </button>
    </>
  )
}

export default App
