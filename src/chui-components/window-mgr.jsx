import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const WindowManagerContext = React.createContext(null)

export const WindowManager = ({ windowList, setWindowList }) => {
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
  windowList: PropTypes.arrayOf(PropTypes.element).isRequired,
  setWindowList: PropTypes.func.isRequired
}
