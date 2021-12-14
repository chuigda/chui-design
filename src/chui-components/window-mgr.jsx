import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const WindowManagerContext = React.createContext(null)

export const WindowManager = ({ initialWindows }) => {
  const [windowList, setWindowList] = useState(initialWindows || [])
  const store = {
    windowList, setWindowList
  }
  return (
    <WindowManagerContext.Provider value={store}>
      { windowList }
    </WindowManagerContext.Provider>
  )
}

WindowManager.propTypes = {
  initialWindows: PropTypes.arrayOf(PropTypes.element)
}
