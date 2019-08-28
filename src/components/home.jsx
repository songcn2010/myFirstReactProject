import React from 'react';
import './home.css';

import { Grid, Icon } from 'semantic-ui-react'
import { NavLink, Switch, Route } from 'react-router-dom'

import Main from './home/main'
import Info from './home/info'
import Chat from './home/chat'
import My from './home/my'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="home_content">
          <Switch>
            <Route exact path='/home' component={Main}></Route>
            <Route path='/home/info' component={Info}></Route>
            <Route path='/home/chat' component={Chat}></Route>
            <Route path='/home/my' component={My}></Route>
          </Switch>
        </div>
        <div className="home_menu">
          {/* 用ui组件中的grid网格布局 */}
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <NavLink to='/home' exact>
                  <Icon name='warehouse'></Icon>
                  <p>主页</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to='/home/info'>
                  <Icon name='search'></Icon>
                  <p>资讯</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to='/home/chat'>
                  <Icon name='rocketchat'></Icon>
                  <p>微聊</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to='/home/my'>
                  <Icon name='user'></Icon>
                  <p>我的</p>
                </NavLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Home