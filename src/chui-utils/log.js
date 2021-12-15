const error = (...args) => {
  console.error('[chui-design error]', ...args)
}

const warn = (...args) => {
  console.warn('[chui-design warn]', ...args)
}

const info = (...args) => {
  console.info('[chui-design info]', ...args)
}

const debug = (...args) => {
  console.debug('[chui-design debug]', ...args)
}

const trace = (...args) => {
  console.trace('[chui-design trace]', ...args)
}

const log = {
  error,
  warn,
  info,
  debug,
  trace
}

export default log
