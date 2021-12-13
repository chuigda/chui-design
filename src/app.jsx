import React from 'react'

import './chui-style.css'
import Window from './chui-components/window.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import Button from './chui-components/button.jsx'
import { HSpacer, VSpacer } from './chui-components/spacer.jsx'
import TextArea from './chui-components/text-area.jsx'
import Table from './chui-components/table'

const App = () => (
  <div className="app">
    <Window hWnd="mainWindow" title="Search box" style={{ width: '600px' }}>
      <div style={{ display: 'flex', marginBottom: '0.5em' }}>
        <LineEdit placeholder="type here" style={{ width: '100%' }}/>
        <HSpacer/>
        <Button>Search</Button>
        <HSpacer/>
        <Button foreColor="red">Danger!</Button>
      </div>
      <TextArea style={{
        width: '100%',
        height: '300px'
      }} placeholder="bullshit!"/>
      <hr/>
      <Table title={['Feature', 'chui-design', 'google mui', 'alibaba antd']}
             rows={[
               ['Small', '🙂', '🙃', '😔'],
               ['Ancient', '🤤', '😥', '😵'],
               ['Designed by Holy Chuigda', '🤣', '😭', '💀']
             ]}
             style={{ width: '100%' }}
      />
      <VSpacer />
      <Table title={['Feature', 'chui-design', 'google mui', 'alibaba antd']}
             rows={[
               ['Small', '🙂', '🙃', '😔'],
               ['Ancient', '🤤', '😥', '😵'],
               ['Designed by Holy Chuigda', '🤣', '😭', '💀']
             ]}
             busy
             style={{ width: '100%' }}
      />
    </Window>
  </div>
)

export default App
