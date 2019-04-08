import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: todosData
        }
    }

    render(){
        const TodoComponent = this.state.data.map(todo => <TodoItem key={todo.id} item={todo} />)
        return(
            <div className="todo-list">
            {TodoComponent}
        </div>
        )
    }
}

export default App