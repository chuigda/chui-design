import React from 'react'
import {
  BrowserRouter, Switch, Route, Link, useHistory
} from 'react-router-dom'

import Login from './views/LoginPage.jsx'
import Index from './views/IndexPage.jsx'

const App = () => {
  const history = useHistory()
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login history={history}/>
          </Route>
          <Route exact path="/index">
            <Index history={history}/>
          </Route>
          <Route exact path="/logged-out">
            <div>You were logged out, damn it</div>
            <Link to="/login">
              <button>Goto log-in</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
