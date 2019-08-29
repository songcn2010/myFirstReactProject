import React from 'react';
import './my.css';

import { Button, Grid, Icon, Modal } from "semantic-ui-react"

//引入图片裁切组件
import AvatarEditor from 'react-avatar-editor';

class My extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: '',
      username: '',
      isShowSelectModal: false,
      isShowEditModal: false,
      //用于保存子组件传过来的图片数据
      avatarFile: ''
    }
  }


  componentDidMount() {
    this.getUserDesc()
  }
  getUserDesc = async () => {
    let res = await this.axios.post('my/info', {
      user_id: localStorage.getItem('uid')
    });
    // console.log(res)
    if (res.meta.status === 200) {
      this.setState({
        avatar: res.data.avatar,
        username: res.data.username
      })
    }
  }

  //展示选择头像模态框
  showSelect = () => {
    this.setState({
      isShowSelectModal: true
    })
  }

  //显示编辑头像的模态框并关闭选择的
  editAvatar = (file) => {
    if (file) {
      //隐藏选择的模态框
      this.setState({
        isShowSelectModal: false,
        avatarFile: file
      })
      //显示编辑头像模态框
      this.state.isShowEditModal = true;
      //保存图片
    }else{
      this.setState({
        isShowSelectModal: false
      })
    }
  }

  //关闭编辑模态框
  closeEdit = (avatar) => {
    this.setState({
      isShowEditModal: false,
      avatar
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="my-container">
        <SelectAvatar open={this.state.isShowSelectModal} editAvatar={this.editAvatar}></SelectAvatar>
        <EditAvatar open={this.state.isShowEditModal} file={this.state.avatarFile} closeEdit={this.closeEdit}></EditAvatar>
        <div className='my-title'>
          <img src={'http://127.0.0.1:9999/public/my-bg.png'} alt='me' />
          <div className="info">
            <div className="myicon" onTouchEnd={this.showSelect}>
              {/* 这里由于数据库保存有问题，所以设置一个判断和默认头像 */}
              <img src={this.state.avatar ? this.state.avatar : 'http://127.0.0.1:9999/public/icon.png'} alt="icon" />
            </div>
            <div className='name'>{this.state.username}</div>
            <Button color='green' size='mini'>已认证</Button>
            <div className='edit'>编辑个人资料</div>
          </div>
        </div>
        <Grid padded className='my-menu'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Icon name='clock outline' size='big' />
              <div>看房记录</div>
            </Grid.Column>
            <Grid.Column>
              <Icon name='yen sign' size='big' />
              <div>我的订单</div>
            </Grid.Column>
            <Grid.Column>
              <Icon name='bookmark outline' size='big' />
              <div>我的收藏</div>
            </Grid.Column>
            <Grid.Column>
              <Icon name='user outline' size='big' />
              <div>个人资料</div>
            </Grid.Column>
            <Grid.Column>
              <Icon name='home' size='big' />
              <div>身份认证</div>
            </Grid.Column>
            <Grid.Column>
              <Icon name='microphone' size='big' />
              <div>联系我们</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='my-ad'>
          <img src={'http://127.0.0.1:9999/public/ad.png'} alt="" />
        </div>
      </div>
    )
  }
}

//选择头像的模态框
class SelectAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fileRef = React.createRef();
  }
  submitFile = () => {
    let file = this.fileRef.current.files[0];
    //调用父组件传过来的方法，将文件数据传回去
    this.props.editAvatar(file)
  }
  render() {

    return (
      <div>
        <Modal size='small' open={this.props.open}>
          <Modal.Header>选择图片</Modal.Header>
          <Modal.Content>
            <input type="file" ref={this.fileRef} />
          </Modal.Content>
          <Modal.Actions>
            <Button onTouchEnd={this.submitFile} positive icon='checkmark' labelPosition='right' content='确定' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }

}

//编辑头像模态框
class EditAvatar extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      scale: 1
    }
  }

  //改变头像缩放比例
  changeScale = (e) => {
    // console.log(e.target.value)
    this.setState({
      scale: +e.target.value
    })
  }

  //提交
  submitEdit = async () => {
    //发送修改头像请求
    // console.log(this.editor.getImage().toDataURL())
    let avatar = this.editor.getImage().toDataURL();
    let res = await this.axios.post('my/avatar',{
      avatar
    });
    console.log(res)
    let {meta} = res;
    if(meta.status === 200){
      //关闭模态框
      this.props.closeEdit(avatar)
    }
  }

  //设置编辑插件的ref
  setEditorRef = (editor) => this.editor = editor

  render() {
    // console.log(this.props.file)
    return (
      <div>
        <Modal size='small' open={this.props.open}>
          <Modal.Header>上传头像</Modal.Header>
          <Modal.Content>
            <AvatarEditor 
              ref={this.setEditorRef}
              image= {this.props.file}
              width={200}
              height={200}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={this.state.scale}
              rotate={0}
              borderRadius={100}
            ></AvatarEditor>
            <div>
              <span className='avatar-zoom'>缩放:</span>
              <input
                name="scale"
                type="range"
                min='1'
                max="2"
                step="0.01"
                value={this.state.scale}
                onChange={this.changeScale}
              />
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button onTouchEnd={this.submitEdit} positive icon='checkmark' labelPosition='right' content='确定' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default My