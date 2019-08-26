import React from 'react';

import Home from './components/home';
import Login from './components/login'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* 配置路由 */}
        {/* <ul>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/home">首页</Link></li>
        </ul> */}

        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App