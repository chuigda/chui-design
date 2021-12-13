/* eslint-disable */
import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { mobius } from '../utils/mobius'
import { purgeCreds } from '../utils/credUtil'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'loading' }

    this.onLogout = this.onLogout.bind(this)
    this.onReload = this.onReload.bind(this)
  }

  componentDidMount() {
    const self = this
    const impl = async () => {
      const { success, message, result } = await mobius.get('/api/info').priv(true).do()
      if (!success) {
        alert(`获取数据失败: ${message}`)
      }
      self.setState({ text: result })
    }
    impl().then(() => {}).catch(err => alert(`获取数据失败: ${err}`))
  }

  onReload() {
    const self = this
    const impl = async () => {
      const { success, message, result } = await mobius.get('/api/info2').priv(true).do()
      if (!success) {
        alert(`获取数据失败: ${message}`)
      }
      self.setState({ text: result })
    }
    impl().then(() => {}).catch(err => alert(`获取数据失败: ${err}`))
  }

  onLogout() {
    purgeCreds()
    this.props.history.replace('/login')
  }

  render() {
    return (
      <>
        <div>{ this.state.text }</div>
        <button onClick={this.onReload}>Reload</button>
        <button onClick={this.onLogout}>Logout</button>
      </>
    )
  }
}

Index.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Index)
