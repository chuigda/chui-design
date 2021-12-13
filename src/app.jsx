import React from 'react'

import './chui-style.css'
import Window from './chui-components/window.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import Button from './chui-components/button.jsx'
import Spacer from './chui-components/spacer.jsx'
import TextArea from './chui-components/text-area.jsx'

const App = () => (
  <div className="app">
    <Window hWnd="mainWindow" title="Search box" style={{ width: '600px' }}>
      <div style={{ display: 'flex', marginBottom: '0.5em' }}>
        <LineEdit placeholder="type here" style={{ width: '100%' }}/>
        <Spacer/>
        <Button>Search</Button>
        <Spacer/>
        <Button foreColor="red">Danger!</Button>
      </div>
      <TextArea style={{
        width: '100%',
        height: '300px'
      }} placeholder="bullshit!"/>
    </Window>
  </div>
)

export default App
