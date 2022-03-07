import { WindowManagerContext } from './window-mgr.jsx'
import { useContext } from '../chui-utils/fre-plus'

const ItemIcon = ({
  icon,
  iconSize,
  text,
  onUseItem
}) => {
  const windowManagerContext = useContext(WindowManagerContext)

  const onDoubleClick = event => {
    if (onUseItem) {
      onUseItem(windowManagerContext, event)
    }
  }

  return (
    <div className="chui-item-icon"
         onClick={onDoubleClick}
         style={{
           minWidth: `calc(${iconSize}px + 2em)`,
           maxWidth: `calc(${iconSize}px + 2em)`,
           maxHeight: `calc(${iconSize}px + 6px + 2em)`
         }}
    >
      <div className="chui-item-icon-icon" style={{
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        backgroundImage: `url(${icon})`,
        backgroundSize: `${iconSize}px`
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

export default ItemIcon
