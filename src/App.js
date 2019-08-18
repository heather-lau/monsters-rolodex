import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
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
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}

export default App
