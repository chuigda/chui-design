import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'
import Button from './button.jsx'

const makeTitleBar = (title, backColor, foreColor, hWnd, setPosition, windowApi) => {
  const { color, backgroundColor } = makeColorStyle(foreColor, backColor)

  const titleBarPad = {
    background: `repeating-linear-gradient(${color}, ${color} 1px, `
      + `${backgroundColor} 1px, ${backgroundColor} 2px)`,
    flexGrow: 1,
    margin: '0.2em'
  }

  const titleBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(1em + 7px)',
    borderBottom: `1px solid ${color}`
  }

  return (
    <div className="chui-cursor-move" style={titleBarStyle}>
      <div className="chui-cursor-move" style={titleBarPad}/>
      <div className="chui-cursor-move" style={{ color, userSelect: 'none' }}>{title}</div>
      <div className="chui-cursor-move" style={titleBarPad}/>
      <Button foreColor={foreColor} backColor={backColor}>_</Button>
      <Button foreColor={foreColor} backColor={backColor} >X</Button>
    </div>
  )
}

const Window = ({
  hWnd,
  initPosition,
  windowApi,
  backColor,
  foreColor,
  busy,
  title,
  children,
  style,
  ...rest
}) => {
  const [position, setPosition] = useState(initPosition || { x: '200px', y: '200px' })

  const windowStyle = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    ...style,
    ...makeColorStyle(foreColor, backColor)
  }

  return (
    <div className="chui-window" style={windowStyle} {...rest}>
      { makeTitleBar(title, backColor, foreColor, hWnd, setPosition, windowApi) }
      <div style={{ padding: '0.5em' }}>
        { children }
      </div>
    </div>
  )
}

Window.propTypes = {
  hWnd: PropTypes.number.isRequired,
  initPosition: PropTypes.object,
  windowApi: PropTypes.object,
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  busy: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object
}

export default Window
