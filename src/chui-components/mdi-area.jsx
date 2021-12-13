import React from 'react'
import PropTypes from 'prop-types'

const MDIArea = ({
  windows,
  ...rest
}) => (
  <div {...rest}>{windows}</div>
)

MDIArea.propTypes = {
  windows: PropTypes.arrayOf(PropTypes.object)
}

export default MDIArea
