import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    const resposne = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resposne.json()
    this.setState({ monsters: users })
  }

  render () {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    )
  }
}

export default App
