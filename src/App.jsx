import React from 'react';

import Home from './components/home';
import Login from './components/login'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {

  render() {
    // console.log(localStorage.getItem('token'))  
      return (
        <BrowserRouter>
          <Switch>
            {/* 简单实现一个有登录的时候直接首页，没有直接登录页 */}
            <Redirect exact  path='/' to={localStorage.getItem('token')?"/home":"/login"}></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      )
  }
}

export default App