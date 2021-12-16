import React, { useState } from 'react'

import './chui-style.css'
import { WindowManager } from './chui-components/window-mgr.jsx'
import TaskBar from './chui-components/task-bar.jsx'
import ItemIcon from './chui-components/item-icon.jsx'
import { getGlobalColor } from './chui-config/color'

import netFolderImageUrl from './chui-res/icons/directory_e-2.png'
import briefCaseImageUrl from './chui-res/icons/briefcase-2.png'
import explorerImageUrl from './chui-res/icons/computer_explorer-4.png'
import consoleImageUrl from './chui-res/icons/console_prompt-0.png'

const allowDrop = event => {
  event.preventDefault()
  // eslint-disable-next-line no-param-reassign
  event.dataTransfer.dropEffect = 'move'
}

const App = () => {
  const [windowList, setWindowList] = useState([])
  return (
    <div className="app"
         onDragOver={allowDrop}
         style={{ width: '100%', height: '100%', backgroundColor: getGlobalColor().colorPlate.cyan }}>
      <WindowManager windowList={windowList} setWindowList={setWindowList}>
        <div style={{
          position: 'absolute',
          left: 4,
          top: 4,
          height: 'calc(100vh - 48px)',
          display: 'flex',
          gap: '0.5em',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
          <ItemIcon iconSize={48} icon={netFolderImageUrl} text="精品台区" />
          <ItemIcon iconSize={48} icon={briefCaseImageUrl} text="智能配电室" />
          <ItemIcon iconSize={48} icon={explorerImageUrl} text="智能微电网" />
          <ItemIcon iconSize={48} icon={consoleImageUrl} text="MS-DOS方式" />
        </div>
        <TaskBar backColor="htmlGray" activeBackColor="white" activeForeColor="black"/>
      </WindowManager>
    </div>
  )
}

export default App
