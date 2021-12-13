import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const LineEdit = ({
  backColor, foreColor, password, ...rest
}) => {
  const editStyle = { ...makeColorStyle(foreColor, backColor) }

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
  password: PropTypes.any
}

export default LineEdit
