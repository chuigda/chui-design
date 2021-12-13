import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const TextArea = ({
  backColor, foreColor, ...rest
}) => {
  const editStyle = { ...makeColorStyle(foreColor, backColor) }

  return <textarea spellCheck={false} className="chui-text-area" style={editStyle} {...rest} />
}

TextArea.propTypes = {
  backColor: PropTypes.string,
  foreColor: PropTypes.string
}

export default TextArea
