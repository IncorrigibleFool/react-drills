import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleText = (value) => {
    this.setState({
      text: value
    })
  }
  
  render() {
    return (
      <div className='App'>
        <input placeholder='type here' onChange={event => this.handleText(event.target.value)}></input>
        <p>{this.state.text}</p>  
      </div>
    )
  }
}

export default App;
