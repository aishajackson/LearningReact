import React, {Component} from 'react'

class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    let val
    
    if(this.state.isLoggedIn){
      val = 'in'
    }else{
      val = 'out'
    }
    
    return(
      <div>
        <h1>You are currently logged {val}</h1>
      </div>
    )
  }

}
export default App