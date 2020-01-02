'use strict'

import React from 'react'

const Title = (props) => (
  <h1>{props.name}!</h1>
)

Title.defaultProps = {
  name: 'Unknow'
}

export default Title
