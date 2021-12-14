import React from 'react'
import PropTypes from 'prop-types'

import { makeColorStyle } from '../chui-config/color'

const Table = ({
  key, backColor, foreColor, busy, title, rows, style, ...rest
}) => {
  const tableStyle = { ...style, ...makeColorStyle(foreColor, backColor) }
  const classes = 'chui-table'
    + `${busy ? ' chui-cursor-busy' : ''}`

  const tdClasses = `${busy ? 'chui-cursor-busy chui-busy-overlay' : ''}`

  return (
    <table className={classes} style={tableStyle} {...rest}>
      <thead>
        <tr>
          {
            title ? title.map((piece, idx) => (
                <td key={`chui-table-${key}-theader-${idx}`}
                    className={tdClasses}>
                  {piece}
                </td>))
              : []
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, rowIdx) => (
            <tr key={`chui-table-${key}-tbody-${rowIdx}`}>
              {
                row.map((col, colIdx) => (
                  <td key={`chui-table-${key}-tbody-${rowIdx}-${colIdx}`}
                      className={tdClasses}>
                    {col}
                  </td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  key: PropTypes.string,
  backColor: PropTypes.string,
  foreColor: PropTypes.string,
  busy: PropTypes.any,
  title: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  style: PropTypes.object
}

export default Table
