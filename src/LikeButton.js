'use strict'

import React from 'react'
import Button from './button'

const callback = () => {
  console.log("I'm a callback :)")
}

const LikeButton = () => (
  <Button handle={callback}>Curtir</Button>
)

export default LikeButton
