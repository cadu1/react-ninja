'use strict'

import React, { Component } from 'react'

import Square from './Square'
import Button from './Button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
  }

  changeColor (color) {
    this.setState({
      color: color
    })
  }

  render () {
    return (
      <div className='container'>
        <Square color={this.state.color} />
        {['gray', 'yellow', 'black'].map((color, index) => (
          <Button key={index} handle={() => this.changeColor(color)}>{color}</Button>
        ))}
      </div>
    )
  }
}

export default App
