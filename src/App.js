import React from 'react'
import{useTodoLayerValue} from './context/TodoContext'

const App = () => {
  const [{ todos},dispatch]=useTodoLayerValue();
  console.log(todos)
  return (
    <div>Alper</div>
  )
}

export default App