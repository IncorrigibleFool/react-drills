import React, { Component } from "react";
import "./App.css";
import Todo from './Todo.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      things: ['stuff', 'more stuff'],
      input: ''
    }
  }

  handleChange = (value) => {
    this.setState({input: value})
  }

  handleClick = () => {
    this.setState({
      things: [...this.state.things, this.state.input],
      input:''
    })
  }
  
  render() {
    var list = this.state.things.map(elem =>{
      return <Todo task={elem}/>
    })
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={event => this.handleChange(event.target.value)} placeholder='add a task'></input>
        <button onClick={this.handleClick}>Add</button>
        <div>
          <br/>
          {list}
        </div>
      </div>
    )
  }
}

export default App;
