import React, { Component } from "react";
import "./App.css";
import Image from './Image.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      img: 'https://i.imgur.com/lKENFJ9.png'
    }
  }
  
  render() {
    return (
      <div className="App">
        <Image
        img={this.state.img}
        />
      </div>
    )
  }
}

export default App;