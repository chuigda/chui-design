import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-cycle
import Window from './window.jsx'
import log from '../chui-utils/log'

export const WindowManagerContext = React.createContext(null)

export const WindowManager = ({ children }) => {
  const [windowList, setWindowList] = useState({
    list: []
  })
  const maxHWnd = useRef(1000)
  const store = {
    windowList,
    setWindowList,
    maxHWnd
  }

  return (
    <WindowManagerContext.Provider value={store}>
      { children }
      {
        windowList.list.map(windowObject => (
          <div key={`chui-window-${windowObject.hWnd}`}
               style={{
                 display: windowObject.visible ? undefined : 'none',
                 width: '0',
                 height: '0',
                 position: 'absolute',
                 left: '0',
                 top: '0',
                 userSelect: windowObject.visible ? undefined : 'none'
               }}>
            { windowObject.vdom }
          </div>
        ))
      }
    </WindowManagerContext.Provider>
  )
}

WindowManager.propTypes = {
  windowList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWindowList: PropTypes.func.isRequired,
  children: PropTypes.any
}

export const createWindow = (windowManagerContext, hWnd, title, children, restAttr) => {
  const { maxHWnd, setWindowList } = windowManagerContext

  const [actualHWnd, creationOrder] = (() => {
    maxHWnd.current += 1
    if (hWnd) {
      return [hWnd, maxHWnd.current]
    } else {
      return [`W-${maxHWnd.current}-${Math.round(Math.random() * 8192)}`, maxHWnd.current]
    }
  })()

  const newWindow = (
    <Window hWnd={actualHWnd} title={title} {...restAttr}>
      {children}
    </Window>
  )

  setWindowList(
    windowList => ({
      list: windowList.list.concat([
        {
          creationOrder,
          hWnd: actualHWnd,
          vdom: newWindow,
          visible: true
        }
      ])
    })
  )

  log.info(`created window by using API 'createWindow', hWnd = ${actualHWnd}`)
  return actualHWnd
}

export const closeWindow = (windowManagerContext, hWnd) => {
  log.info(`closing window by using API 'closeWindow', hWnd = ${hWnd}`)

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
  log.info(`activating window by using API 'activateWindow', hWnd = ${hWnd}`)

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
              ...oldWindowList.list.find(windowObject => windowObject.hWnd === hWnd),
              hWnd,
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
            ...oldWindowList.list.find(windowObject => windowObject.hWnd === hWnd),
            hWnd,
            visible
          }])
      })
    )
  }
}

export const CreateWindow = ({
  hWnd, title, children, ...rest
}) => {
  const windowManagerContext = useContext(WindowManagerContext)

  useEffect(() => {
    const actualHWnd = createWindow(windowManagerContext, title, hWnd, children, rest)
    log.info(`created window by using component 'CreateWindow', hWnd = ${actualHWnd}`)
  }, [])

  return <></>
}

CreateWindow.propTypes = {
  hWnd: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}
