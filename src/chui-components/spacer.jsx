import React from 'react'
import PropTypes from 'prop-types'

const HSpacer = ({ count }) => (
  <div style={{
    display: 'inline-block',
    userSelect: 'none',
    width: `${(count || 1) / 2}em`
  }} />
)

HSpacer.propTypes = {
  count: PropTypes.number
}

const VSpacer = ({ count }) => (
  <div style={{
    display: 'block',
    userSelect: 'none',
    height: `${(count || 1) / 2}em`
  }}/>
)

VSpacer.propTypes = {
  count: PropTypes.number
}

export { HSpacer, VSpacer }
