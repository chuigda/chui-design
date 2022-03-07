const HSpacer = ({ count }) => (
  <div style={{
    display: 'inline-block',
    userSelect: 'none',
    width: `${(count || 1) / 2}em`
  }} />
)

const VSpacer = ({ count }) => (
  <div style={{
    display: 'block',
    userSelect: 'none',
    height: `${(count || 1) / 2}em`
  }}/>
)

export { HSpacer, VSpacer }
