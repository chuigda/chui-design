import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const Button = ({
  backColor, foreColor, help, busy, style, ...rest
}) => {
  const buttonStyle = {
    userSelect: 'none',
    ...style,
    ...makeColorStyle(foreColor, backColor)
  }
  const classes = 'chui-button'
    + `${help ? ' chui-cursor-help' : ''}`
    + `${busy ? ' chui-cursor-busy chui-busy-overlay' : ''}`

  return (
    <div className="chui-button-div" style={buttonStyle}>
      <button className={classes} style={{ width: '100%', ...buttonStyle}} {...rest} />
    </div>
  )
}

Button.propTypes = {
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  style: PropTypes.object,
  help: PropTypes.any,
  busy: PropTypes.any
}

export default Button
