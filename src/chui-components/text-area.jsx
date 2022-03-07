import { makeColorStyle } from '../chui-config/color'

const TextArea = ({
  backColor, foreColor, style, ...rest
}) => {
  const editStyle = { ...style, ...makeColorStyle(foreColor, backColor) }

  return <textarea spellCheck={false} className="chui-text-area" style={editStyle} {...rest} />
}

export default TextArea
