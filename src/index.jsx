import { render } from 'fre'
import App from './app.jsx'

import setupMozillaHack from './chui-config/mouse'

setupMozillaHack()

render(
  <App />,
  document.getElementById('root')
)
