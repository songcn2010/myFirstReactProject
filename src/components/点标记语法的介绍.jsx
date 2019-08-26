import React from 'react'
class Home extends React.Component {
  // 点标记语法
  render() {
    return (
      <Form>
        <Form.Input />
        <Form.Button />
      </Form>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <div>
        我是一个form组件
        {this.props.children}
      </div>
    )
  }
  // 可以在组件内部去定义组件
  static Input = () => {
    return <div>Input组件</div>
  }

  static Button = () => {
    return <div>Button组件</div>
  }
}

export default Home
