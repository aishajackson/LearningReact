import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        //target represents the event that was fired
        const {name,value} = event.target
        this.setState({
            [name] : value //firstname/lastname: value of first name/last name
        })
    }
    
    render() {
        return (
            <form>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
                <br />
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App
