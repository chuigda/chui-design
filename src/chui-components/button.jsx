import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const Button = ({
  backColor, foreColor, help, busy, ...rest
}) => {
  const buttonStyle = { ...makeColorStyle(foreColor, backColor) }
  const classes = 'chui-button'
    + `${help ? ' chui-cursor-help' : ''}`
    + `${busy ? ' chui-cursor-busy chui-busy-overlay' : ''}`

  return (
    <div className="chui-button-div" style={buttonStyle}>
      <button className={classes} style={buttonStyle} {...rest} />
    </div>
  )
}

Button.propTypes = {
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  help: PropTypes.any,
  busy: PropTypes.any
}

export default Button
