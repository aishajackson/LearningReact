import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination:"",
            dietaryRestrictions: {
                isVegan: "",
                isVegetarian: "",
                isGF: ""
            }
        }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(event.target)
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState(prevState => {
            return {
                ...prevState.dietaryRestrictions,
                dietaryRestrictions: {
                    [name]: checked
                }
            }
            
        }) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName} 
                        placeholder="First Name" 
                        onChange={this.handleChange} /><br />
                    <input type="text"
                        name="lastName"
                        value={this.state.lastName} 
                        placeholder="Last Name" 
                        onChange={this.handleChange} /><br />
                    <input type="text"
                        name="age"
                        value={this.state.age} 
                        placeholder="Age" 
                        onChange={this.handleChange} /><br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    
                    <label>Destination:</label>
                        <select 
                            value={this.state.destination}
                            onChange={this.handleChange}
                            name="destination"
                        >
                            <option value="Bali">Bali</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegan"
                            checked={this.state.dietaryRestrictions.isVegan}
                            onChange={this.handleChange}
                        /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegetarian"
                            checked={this.state.dietaryRestrictions.isVegetarian}
                            onChange={this.handleChange}
                        /> Vegetarian?
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isGF"
                            checked={this.state.dietaryRestrictions.isGF}
                            onChange={this.handleChange}
                        /> Gluten Free?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <p>Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
                    <p>Vegetarian: {this.state.dietaryRestrictions.isVegetarian ? "Yes" : "No"}</p>
                    <p>Gluten Free: {this.state.dietaryRestrictions.isGF ? "Yes" : "No"}</p>
                </p>
            </main>
        )
    }
}

export default App
