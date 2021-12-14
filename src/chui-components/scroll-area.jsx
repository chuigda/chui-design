import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const ScrollArea = ({
  backColor, foreColor, scroll, style, ...rest
}) => {
  const scrollStyle = {
    overflowX: scroll.indexOf('x') > -1 ? 'scroll' : 'hidden',
    overflowY: scroll.indexOf('y') > -1 ? 'scroll' : 'hidden',
    ...style,
    ...makeColorStyle(foreColor, backColor)
  }

  return <div className="chui-scroll-area" style={scrollStyle} {...rest} />
}

ScrollArea.propTypes = {
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  scroll: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default ScrollArea
