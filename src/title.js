'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Unknow'
    }
  },
  render: function () {
    return (
      <h1>{this.props.name}</h1>
    )
  }
})

export default Title
