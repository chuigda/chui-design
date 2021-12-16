import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { WindowManagerContext } from './window-mgr.jsx'

const ItemIcon = ({
  icon,
  iconSize,
  text,
  onUseItem
}) => {
  const windowManagerContext = useContext(WindowManagerContext)

  return (
    <div className="chui-item-icon"
         onDoubleClick={event => (onUseItem ? onUseItem(windowManagerContext, event) : false)}
         style={{
           minWidth: `calc(${iconSize}px + 2em)`,
           maxWidth: `calc(${iconSize}px + 2em)`,
           maxHeight: `calc(${iconSize}px + 6px + 2em)`
         }}
    >
      <div className="chui-item-icon-icon" style={{
        width: iconSize,
        height: iconSize,
        backgroundImage: `url(${icon})`,
        backgroundSize: iconSize
      }} />
      <div className="chui-item-icon-text" style={{
        marginTop: '4px',
        height: '2em',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {text}
      </div>
    </div>
  )
}

ItemIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onUseItem: PropTypes.func
}

export default ItemIcon
