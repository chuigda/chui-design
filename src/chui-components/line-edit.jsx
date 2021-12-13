import React from 'react'
import PropTypes from 'prop-types'

import { getGlobalColor } from '../chui-config/color'

const LineEdit = ({
  background, foreground, password, ...rest
}) => {
  const { colorPlate, defaultFore, defaultBack } = getGlobalColor()
  const editStyle = {
    backgroundColor: colorPlate[background || defaultBack],
    color: colorPlate[foreground || defaultFore]
  }

  return (
    <input className="chui-line-edit"
           type={password ? 'password' : 'text'}
           style={editStyle} {...rest}
    />
  )
}

LineEdit.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string,
  password: PropTypes.any
}

export default LineEdit
