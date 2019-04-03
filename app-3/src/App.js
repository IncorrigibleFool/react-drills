import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['dude', 'gnarly', 'sweet', 'cool', 'righteous', 'radical'],
      filterStr: ''
    }
  }

  handleChange = (value) => {
    this.setState({filterStr: value})
  }
  
  render() {
    var displayStr = this.state.list.filter(item => 
      item.includes(this.state.filterStr)
      ).map(item => 
        <h2>{item}</h2>  
      )
    
    return (
      <div className="App">
        <input placeholder='type here' onChange={event => this.handleChange(event.target.value)}></input>
        <div>{displayStr}</div>
      </div>
    )
  }
}

export default App;
