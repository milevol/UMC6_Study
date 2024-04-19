import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal.jsx'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <h1>안녕하세요!</h1>
    <h3>내용내용내용</h3>
    <button onClick = {() => setIsOpen(true)}>버튼 열기</button>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </>
  )
}

export default App
