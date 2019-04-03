import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['dude', 'gnarly', 'sweet', 'cool', 'righteous']
    }
  }
  
  render() {
    var displayList = this.state.list.map(elem =>
      <h2>{elem}</h2>  
    )
    
    return (
      <div className='App'>{displayList}</div>
    )
  }
}

export default App;
