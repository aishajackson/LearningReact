import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: todosData 
        }
    }
    render(){
        const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} />)
        return(
            <div className="todo-list">
                {todoItems}
            </div> 
        )
    }
}

export default App