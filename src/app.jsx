import React from 'react'

import Button from './chui-components/button.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import TextArea from './chui-components/text-area.jsx'
import './chui-style.css'

const App = () => (
  <div className="App">
    <div>Welcome to the playground</div>
    <LineEdit placeholder="Bu, bu burn it down!"/>&nbsp;
    <Button foreground="blue">Push</Button>&nbsp;
    <Button foreground="red" help>The</Button>&nbsp;
    <Button busy>Button</Button>
    <br/>
    <br/>
    <TextArea foreground="orange"/>
  </div>
)

export default App
