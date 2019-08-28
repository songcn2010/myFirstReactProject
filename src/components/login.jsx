import React from 'react';
// 引入semantic-ui-react的组件，这个是按需加载的
import { Form,Message } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';

// 引入login的样式文件
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      uname: '',
      pwd: '',
      loginTip: false,
      loginResMsg: ''
    }
  }


  //绑定输入框和state
  handleChange = (e) => {
    // console.log(e.target)
    let { name, value } = e.target;
    // console.log(name,value)
    this.setState({
      [name]: value
    })
  }

  //登录
  login = async (e) => {
    e.preventDefault();
    let { uname, pwd } = this.state;
    let res = await this.axios.post('users/login',{
        uname,
        pwd
    });
    // console.log(res)
    //返回结果后提示
    let { data, meta } = res;
    this.setState({
      loginTip: true,
      loginResMsg: meta.msg
    })
    //判断结果
    if(meta.status === 200){
      localStorage.setItem('token',data.token);
      setTimeout(() => {
        this.props.history.push('/home');
      },1000)
    }else{
      setTimeout(() => {
        this.setState({
          loginTip: false,
          loginResMsg: ''
        })
      },1000)
    }
  }



  render() {
    return (
      <div className="login_container">
        <div className="login_title">登录</div>
        <div className="login_form">

          {/* Form表示整个表单组件，Form.Field表示表单的一个字段 */}
          {/* required 是H5自带的表单校验功能，只写required表单非空校验 */}
          {/* Form 组件提交可以在Form上使用onSubmit事件 */}
          <Form action='' onSubmit={this.login}>
            <Form.Field>
              <Form.Input
                name='uname'
                size='big'
                icon='user'
                iconPosition='left'
                placeholder='请输入用户名'
                autoComplete='off'
                value={this.state.uname}
                onChange={this.handleChange}
                required />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name='pwd'
                size='big'
                icon='lock'
                iconPosition='left'
                placeholder='请输入密码'
                autoComplete='off'
                value={this.state.pwd}
                onChange={this.handleChange}
                required />
            </Form.Field>
            <Form.Field>
              <Form.Button fluid size='big' color='green' type='submit'>登录</Form.Button>
            </Form.Field>
          </Form>
        </div>
        { this.state.loginTip ? <Message className="messageBox">{this.state.loginResMsg}</Message> : null }
      </div>
    )
  }

}

export default withRouter(Login)