import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'
import Button from './button.jsx'
// eslint-disable-next-line import/no-cycle
import {
  WindowManagerContext,
  closeWindow,
  activateWindow,
  setWindowVisibility
} from './window-mgr.jsx'

const makeTitleBar = (title, backColor, foreColor, setPosition, hWnd) => {
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
    marginLeft: '1em',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  }

  const buttonStyle = {
    height: '100%',
    border: 'none'
  }

  const titleRef = useRef()
  const relXY = useRef([0, 0])

  const windowManagerContext = useContext(WindowManagerContext)

  const onMouseDown = event => {
    activateWindow(windowManagerContext, hWnd)

    const { pageX, pageY } = event
    const { left, top } = titleRef.current.getBoundingClientRect()
    relXY.current = [pageX - left + 4, pageY - top + 4]
  }

  const onDragStart = event => {
    event.dataTransfer.setDragImage(titleRef.current, -99999, -99999)
  }

  const onDrag = event => {
    const { pageX, pageY } = event
    let x = pageX - relXY.current[0]
    let y = pageY - relXY.current[1]
    if (x < 0) {
      x = 0
    }
    if (y < 0) {
      y = 0
    }
    setPosition({ x, y })
  }

  const onHideWindow = event => {
    setWindowVisibility(windowManagerContext, hWnd, false)
    event.stopPropagation()
  }
  const onCloseWindow = event => {
    closeWindow(windowManagerContext, hWnd)
    event.stopPropagation()
  }

  return (
    <div style={titleBarStyle}>
      <div ref={titleRef}
           draggable
           onMouseDown={onMouseDown}
           onDragStart={onDragStart}
           onDrag={onDrag}
           className="chui-cursor-move"
           style={titleStyle}>
        {title}
      </div>
      <Button foreColor={foreColor}
              backColor={backColor}
              style={buttonStyle}
              onClick={onHideWindow}>
        _
      </Button>
      <Button foreColor={foreColor}
              backColor={backColor}
              style={buttonStyle}
              onClick={onCloseWindow}>
        X
      </Button>
    </div>
  )
}

const Window = ({
  hWnd,
  pos,
  visible,
  backColor,
  foreColor,
  title,
  children,
  style,
  ...rest
}) => {
  const classes = 'chui-window'

  const [position, setPosition] = useState(pos || { x: '100px', y: '100px' })

  const windowStyle = {
    border: '1px solid',
    position: 'fixed',
    left: position.x,
    top: position.y,
    ...style,
    ...makeColorStyle(foreColor, backColor)
  }

  const windowManagerContext = useContext(WindowManagerContext)
  const onActivateWindow = () => activateWindow(windowManagerContext, hWnd)

  return (
    <div key={`chui-window-${hWnd}`}
         className={classes}
         style={windowStyle}
         onClick={onActivateWindow}
         {...rest}>
      { makeTitleBar(title, backColor, foreColor, setPosition, hWnd) }
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
  visible: PropTypes.bool,
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object
}

export default Window
