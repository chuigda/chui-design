import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { mobius } from '../utils/mobius'
import { saveCreds } from '../utils/credUtil'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userName: '', password: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const self = this
    const { userName, password } = self.state
    const impl = async () => {
      const { success, message, result } = await mobius.post('/api/login').data({
        userName, password
      }).do()
      if (success) {
        saveCreds(result)
        self.props.history.replace('/index')
      } else {
        alert(`登录错误: ${message}`)
      }
    }
    impl().then(() => {}).catch(err => alert(`${err}`))
  }

  render() {
    return (
      <>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
          <input type="text" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
          <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
          <input type="submit" onClick={this.handleSubmit} value="Login"/>
          </div>
        </form>
      </>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Login)
