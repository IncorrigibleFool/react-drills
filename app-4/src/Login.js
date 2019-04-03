import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
      super()
      this.state = {
        username: '',
        password: ''
      }
    }

    handleUsername = (value) => {
        this.setState({username: value})
    }

    handlePassword = (value) => {
        this.setState({password: value})
    }

    handleLogin = () => {
        alert(`Logging in ${this.state.username} with ${this.state.password} as password.`)
    }
    
    render() {
      return (
        <div className="App">
          <input placeholder='username' onChange={event => this.handleUsername(event.target.value)}></input>
          <input placeholder='password' onChange={event => this.handlePassword(event.target.value)}></input>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      )
    }
}