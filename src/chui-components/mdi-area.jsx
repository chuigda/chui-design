import React from 'react'
import PropTypes from 'prop-types'

const MDIArea = ({
  windows,
  ...rest
}) => (
  <div {...rest}>
    { Object.entries(windows).filter(window => window.visible) }
  </div>
)

MDIArea.propTypes = {
  windows: PropTypes.arrayOf(PropTypes.object)
}

export default MDIArea
