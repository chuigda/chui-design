import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'
import Button from './button.jsx'

const makeTitleBar = (title, backColor, foreColor, hWnd, setPosition) => {
  const { color, backgroundColor } = makeColorStyle(foreColor, backColor)

  const titleBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(1em + 7px)',
    borderBottom: `1px solid ${color}`,
    background: color,
  }

  const titleStyle = {
    color: backgroundColor,
    userSelect: 'none',
    width: '100%',
    marginLeft: '1em'
  }

  return (
    <div style={titleBarStyle}>
      <div className="chui-cursor-move" style={titleStyle}>{title}</div>
      <Button foreColor={foreColor} backColor={backColor}>_</Button>
      <Button foreColor={foreColor} backColor={backColor} >X</Button>
    </div>
  )
}

const Window = ({
  hWnd,
  pos,
  zIndex,
  visible,
  backColor,
  foreColor,
  busy,
  title,
  children,
  style,
  ...rest
}) => {
  const [position, setPosition] = useState(pos || { x: '100px', y: '100px' })

  const windowStyle = {
    border: '1px solid',
    position: 'fixed',
    left: position.x,
    top: position.y,
    zIndex,
    ...style,
    ...makeColorStyle(foreColor, backColor)
  }

  return (
    <div key={`chui-window-${hWnd}`} className="chui-window" style={windowStyle} {...rest}>
      { makeTitleBar(title, backColor, foreColor, hWnd, setPosition) }
      <div style={{ padding: '0.5em' }}>
        { children }
      </div>
    </div>
  )
}

Window.propTypes = {
  hWnd: PropTypes.string.isRequired,
  pos: PropTypes.object,
  windowApi: PropTypes.object,
  zIndex: PropTypes.number,
  visible: PropTypes.bool,
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  busy: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object
}

export default Window
