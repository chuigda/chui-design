import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-cycle
import Window from './window.jsx'
import log from '../chui-utils/log'

export const WindowManagerContext = React.createContext(null)

export const WindowManager = ({ children }) => {
  const [windowList, setWindowList] = useState({
    list: []
  })

  const store = { windowList, setWindowList }

  return (
    <WindowManagerContext.Provider value={store}>
      {
        windowList.list.map(windowObject => (
          <div key={`chui-window-${windowObject.hWnd}`}
               style={{
                 display: windowObject.visible ? undefined : 'none',
                 width: '0',
                 height: '0',
                 position: 'absolute',
                 left: '0',
                 top: '0'
               }}>
            {windowObject.vdom}
          </div>
        ))
      }
      { children }
    </WindowManagerContext.Provider>
  )
}

WindowManager.propTypes = {
  windowList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWindowList: PropTypes.func.isRequired,
  children: PropTypes.any
}

export const createWindow = (windowManagerContext, hWnd, children, restAttr) => {
  const actualHWnd = hWnd
    || `W-${Math.round(Math.random() * 1024)}`
      + `-${Math.round(Math.random() * 2048)}`
      + `-${Math.round(Math.random() * 3072)}`
      + `-${Math.round(Math.random() * 4096)}`

  const newWindow = (
    <Window hWnd={actualHWnd} {...restAttr}>
      {children}
    </Window>
  )

  const { setWindowList } = windowManagerContext
  setWindowList(
    windowList => ({
      list: windowList.list.concat([
        {
          hWnd: actualHWnd,
          vdom: newWindow,
          visible: true
        }
      ])
    })
  )

  log.info(`[chui-design] created window by using API 'createWindow', hWnd = ${actualHWnd}`)
  return actualHWnd
}

export const closeWindow = (windowManagerContext, hWnd) => {
  log.info(`[chui-design] closing window by using API 'closeWindow', hWnd = ${hWnd}`)

  if (!windowManagerContext) {
    return
  }

  const { setWindowList } = windowManagerContext
  setWindowList(
    windowList => ({
      list: windowList.list
        .filter(windowObject => windowObject.hWnd !== hWnd)
    })
  )
}

export const activateWindow = (windowManagerContext, hWnd) => {
  log.info(`[chui-design] activating window by using API 'activateWindow', hWnd = ${hWnd}`)

  if (!windowManagerContext) {
    return
  }

  const { windowList, setWindowList } = windowManagerContext
  if (windowList.list[windowList.list.length - 1].hWnd === hWnd) {
    return
  }

  setWindowList(
    oldWindowList => ({
      list: oldWindowList.list
        .filter(windowObject => windowObject.hWnd !== hWnd)
        .concat([{
          ...oldWindowList.list.find(windowObject => windowObject.hWnd === hWnd),
          visible: true
        }])
    })
  )
}

export const setWindowVisibility = (windowManagerContext, hWnd, visible) => {
  log.info(`setting window visibility by using API 'setWindowVisibility', hWnd = ${hWnd}, visible = ${visible}`)

  if (!windowManagerContext) {
    return
  }

  const { setWindowList } = windowManagerContext
  if (!visible) {
    setWindowList(
      oldWindowList => ({
        list: oldWindowList.list.map(windowObject => {
          if (windowObject.hWnd === hWnd) {
            return {
              hWnd,
              vdom: windowObject.vdom,
              visible
            }
          } else {
            return windowObject
          }
        })
      })
    )
  } else {
    setWindowList(
      oldWindowList => ({
        list: oldWindowList.list
          .filter(windowObject => windowObject.hWnd !== hWnd)
          .concat([{
            hWnd,
            vdom: oldWindowList.list.find(windowObject => windowObject.hWnd === hWnd).vdom,
            visible
          }])
      })
    )
  }
}

export const CreateWindow = ({ hWnd, children, ...rest }) => {
  const windowManagerContext = useContext(WindowManagerContext)

  useEffect(() => {
    const actualHWnd = createWindow(windowManagerContext, hWnd, children, rest)
    log.info(`[chui-design info] created window by using component 'CreateWindow', hWnd = ${actualHWnd}`)
  }, [])

  return <></>
}

CreateWindow.propTypes = {
  hWnd: PropTypes.string,
  children: PropTypes.any
}
