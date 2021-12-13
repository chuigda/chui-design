import React from 'react'

import Button from './chui-components/button.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import TextArea from './chui-components/text-area.jsx'
import Table from './chui-components/table.jsx'
import './chui-style.css'

const App = () => (
  <div className="App">
    <div>Welcome to the playground</div>
    <br/>
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
  </div>
)

export default App
