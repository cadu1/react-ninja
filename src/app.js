'use strict'

import React from 'react'

import Title from './title'
import Square from './Square'
import Button from './Button'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title />
        <Button>Some Text</Button>
        <Square />
        {['gray', 'yellow', 'gray'].map((color, index) => (
          <Square key={index} color={color} />
        ))}
      </div>
    )
  }
})

export default App
