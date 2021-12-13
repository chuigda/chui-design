import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ count }) => (
  <div style={{ display: 'inline-block', userSelect: 'none', width: `${(count || 1) / 2}em` }} />
)

Spacer.propTypes = {
  count: PropTypes.number
}

export default Spacer
