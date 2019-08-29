import React from 'react';
import { Tab } from 'semantic-ui-react'

import PullLoader from './Tloader/PullLoader'

import './info.css'

class Info extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render(){
    // console.log(window.innerHeight)
    //tab栏的配置
    //tab在切换时，如果只有属性不同，是不会重新渲染的，做二次封装
    const panes = [
      { menuItem: '资讯', render: () => (<Tab.Pane>
        <M1></M1>
      </Tab.Pane>) },
      { menuItem: '头条', render: () => (<Tab.Pane>
        <M2></M2>
      </Tab.Pane>) },
      { menuItem: '问答', render: () => <Tab.Pane>
        <M3></M3>
      </Tab.Pane> }
    ]

    return (
      <div className='info'>
        <div className="info_title">资讯</div>
        <div className="info_content">
          <Tab panes={panes}  />
        </div>
      </div>
    )
  }
  
}

function M1() {
  return (<PullLoader type={1}></PullLoader>)
}
function M2() {
  return (<PullLoader type={2}></PullLoader>)
}
function M3() {
  return (<PullLoader type={3}></PullLoader>)
}


export default Info