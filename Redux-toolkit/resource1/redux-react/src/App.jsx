import { useState } from 'react'
import TodoList from './components/todo-list/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <TodoList/>
    </div>
    </>
  )
}

export default App
