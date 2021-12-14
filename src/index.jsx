import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

import setupMozillaHack from './chui-config/mouse'

setupMozillaHack()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
