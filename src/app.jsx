import React from 'react'

import Button from './chui-components/button.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import TextArea from './chui-components/text-area.jsx'
import Table from './chui-components/table.jsx'
import './chui-style.css'
import Window from './chui-components/window.jsx'

const App = () => (
  <div className="App">
    <Window hWnd={0}
            title="title"
            foreColor="red"
            style={{ width: '500px', minHeight: '200px' }}
            initPosition={{ x: '114px', y: '200px' }}
    >
      <LineEdit placeholder="Bu, bu burn it down!"/>&nbsp;
      <Button foreColor="blue">Push</Button>&nbsp;
      <Button foreColor="red" help>The</Button>&nbsp;
      <Button busy>Button</Button>
      <br/>
      <br/>
      <TextArea foreColor="orange"/>
      <br/>
      <br/>
      <Table title={['Feature', 'chui-design', 'google mui', 'alibaba antd']}
             rows={[
               ['Small', '🙂', '🙃', '😔'],
               ['Ancient', '🤤', '😥', '😵'],
               ['Designed by great Chuigda', '🤣', '😭', '💀']
             ]}
      />
      <br/>
      <Table title={['Feature', 'chui-design', 'google mui', 'alibaba antd']}
             rows={[
               ['Small', '🙂', '🙃', '😔'],
               ['Ancient', '🤤', '😥', '😵'],
               ['Designed by great Chuigda', '🤣', '😭', '💀']
             ]}
             busy
      />
    </Window>
  </div>
)

export default App
