'use strict'

import React from 'react'

import Title from './title'
import Square from './Square'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title />
        <Square />
        {['gray', 'yellow', 'black'].map((color) => (
          <Square key={color} color={color}/>
        ))}
      </div>
    )
  }
})

export default App
