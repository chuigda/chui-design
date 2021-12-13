import React from 'react'
import PropTypes from 'prop-types'

import { getGlobalColor } from '../chui-config/color'

const Button = ({
  background, foreground, help, busy, ...rest
}) => {
  const { colorPlate, defaultFore, defaultBack } = getGlobalColor()
  const buttonStyle = {
    color: colorPlate[foreground || defaultFore],
    backgroundColor: colorPlate[background || defaultBack]
  }
  const classes = `chui-button ${help ? 'chui-cursor-help' : ''} ${busy ? 'chui-cursor-busy' : ''}`

  return <button className={classes} style={buttonStyle} {...rest} />
}

Button.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string,
  help: PropTypes.any,
  busy: PropTypes.any
}

export default Button
