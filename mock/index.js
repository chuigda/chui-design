const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4
const { typeAssert, enableChainAPI } = require('./typeAssert.cjs')
const cfgattr = require('../src/config/cfgattr.json')

enableChainAPI()

const fakeCred = (() => {
  const ret = {}
  for (const cred of cfgattr.creds) {
    ret[cred.key] = uuid()
  }
  return ret
})()

const credAssertion = (() => {
  const ret = {}
  for (const cred of cfgattr.creds) {
    ret[cred.header.toLowerCase()] = 'string'
  }
  return ret
})()

const priviledged = (req, res, next) => {
  try {
    typeAssert(req.headers, credAssertion)
  } catch (typeAssertError) {
    res.status(401).json({ success: false, message: typeAssertError })
    return
  }

  next()
}

const app = express()
const port = 3080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  const headers = { ...req.headers }
  delete headers['host']
  delete headers['user-agent']
  delete headers['accept']
  delete headers['accept-language']
  delete headers['accept-encoding']
  delete headers['origin']
  delete headers['connection']
  delete headers['if-none-match']

  console.log(' ---= [ INCOMING REQUEST ] =------------')
  console.log('request url:', req.url)
  console.log('request method:', req.method)
  console.log('request headers:', headers)
  console.log('request query:', req.query)
  console.log('request body:', req.body)
  console.log('')
  next()
})

app.post('/api/login', ({ body }, res) => {
  try {
    typeAssert(body, {
      userName: 'string'.chainWith(x => x.length !== 0 ? true : 'empty userName'),
      password: 'string'.chainWith(x => x.length !== 0 ? true : 'empty password')
    })
  } catch (typeAssertError) {
    console.log('type assertion failed: ', typeAssertError)
    res.json({ success: false, message: typeAssertError })
    return
  }

  res.json({ success: true, message: '', result: fakeCred })
})

app.get('/api/info', priviledged, (req, res) => {
  res.json({ success: true, message: '', result: '1145141919810' })
})

app.get('/api/info2', priviledged, (req, res) => {
  res.json({ success: true, message: '', result: uuid() })
})

app.listen(port, () => {
  console.log('application started')
})
