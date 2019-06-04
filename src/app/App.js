import React, {Component} from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prevState) => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render(){
        let buttonVal = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'
        let text = this.state.isLoggedIn ? 'Logged In' : 'Logged Out'
        return (
            <div>
                <button onClick={this.handleClick}>{buttonVal}</button>
                <h3>{text}</h3>
            </div>
        )
    }
    
}

export default App
