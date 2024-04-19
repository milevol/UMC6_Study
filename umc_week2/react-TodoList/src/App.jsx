import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import './App.css'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoDone from './components/TodoDone'

function App() {
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const addDoneItem = (index) => {
    const newDoneItem = items[index];
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setDoneItems([...doneItems, newDoneItem]);
  }

  const deleteItem = (index) => {
    const newDoneItems = doneItems.filter((_, i) => i !== index);
    setDoneItems(newDoneItems);
  }

  return (
    <>
    <TodoHeader/>
    <TodoInput onAdd={addItem}/>
    <TodoDone items={items} onItemDone={addDoneItem} doneItems={doneItems} onDeleteItem={deleteItem}/>
    </>
  )
}

export default App
