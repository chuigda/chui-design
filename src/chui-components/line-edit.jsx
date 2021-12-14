import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const LineEdit = ({
  backColor, foreColor, password, style, ...rest
}) => {
  const editStyle = { ...style, ...makeColorStyle(foreColor, backColor) }

  return (
    <input className="chui-line-edit"
           type={password ? 'password' : 'text'}
           style={editStyle} {...rest}
    />
  )
}

LineEdit.propTypes = {
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  password: PropTypes.any,
  style: PropTypes.object
}

export default LineEdit
