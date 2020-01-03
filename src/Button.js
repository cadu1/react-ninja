'use strict'

import React from 'react'

const Button = ({ children, handle }) => (
  <button onClick={handle}>{children}</button>
)

export default Button
