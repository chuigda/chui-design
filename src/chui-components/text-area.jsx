import React from 'react'
import PropTypes from 'prop-types'

import { getGlobalColor } from '../chui-config/color'

const TextArea = ({
  background, foreground, ...rest
}) => {
  const { colorPlate, defaultFore, defaultBack } = getGlobalColor()
  const editStyle = {
    backgroundColor: colorPlate[background || defaultBack],
    color: colorPlate[foreground || defaultFore]
  }

  return <textarea className="chui-line-edit" style={editStyle} {...rest} />
}

TextArea.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string
}

export default TextArea
