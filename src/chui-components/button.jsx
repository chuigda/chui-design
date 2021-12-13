import React from 'react'
import PropTypes from 'prop-types'

import { getGlobalColor } from '../chui-config/color'

const Button = ({ background, foreground, ...rest }) => {
  const { colorPlate, defaultFore, defaultBack } = getGlobalColor()
  const buttonStyle = {
    color: colorPlate[foreground || defaultFore],
    backgroundColor: colorPlate[background || defaultBack]
  }

  return (
    <button className="chui-button" style={buttonStyle} {...rest}/>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string
}

export default Button
