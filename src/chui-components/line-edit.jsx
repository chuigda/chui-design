import { makeColorStyle } from '../chui-config/color'

const LineEdit = ({
  backColor, foreColor, password, style, ...rest
}) => {
  const editStyle = { ...style, ...makeColorStyle(foreColor, backColor) }

  return (
    <input className="chui-line-edit"
           type={password ? 'password' : 'text'}
           style={editStyle} {...rest}
    />
  )
}

export default LineEdit
