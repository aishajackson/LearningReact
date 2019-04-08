import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
  const TodoComponent = todosData.map(todo => <TodoItem key={todo.id} item={todo} />)
    return (
        <div className="todo-list">
            {TodoComponent}
        </div>
    )
}

export default App