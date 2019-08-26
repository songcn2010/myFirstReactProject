import React from 'react';
// 引入semantic-ui-react的组件，这个是按需加载的
import { Form } from 'semantic-ui-react';

// 引入login的样式文件
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login_container">
        <div className="login_title">登录</div>
        <div className="login_form">

          {/* Form表示整个表单组件，Form.Field表示表单的一个字段 */}
          <Form>
            <Form.Field>
              <Form.Input
                name='username'
                size='big'
                icon='user'
                iconPosition='left'
                placeholder='请输入用户名'
                autoComplete='off' />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name='password' 
                size='big' 
                icon='lock' 
                iconPosition='left' 
                placeholder='请输入密码' 
                autoComplete='off'/>
            </Form.Field>
            <Form.Field>
              <Form.Button fluid size='big' color='green' type='submit'>登录</Form.Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login