import React from 'react';
import './main.css';

//引入子组件
import MainInfoList from './mainInfoList'

//引入轮播图插件的样式
import "react-image-gallery/styles/css/image-gallery.css";
// 引入轮播图组件  注意，这些只需要在本页引用，因为只有这里要用
import ImageGallery from 'react-image-gallery';

import { Input, Grid, Icon } from 'semantic-ui-react';



class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgList: [],
      menuList: [],
      infoList:[]
    }
  }

  //获取轮播图数据
  getImgList = async () => {
    let res = await this.axios.post('homes/swipe'
      // , null, {
      // headers: {
      //   Authorization: localStorage.getItem('token')
      // }
      // 非拦截器，在请求中设置请求头
      // }
    );
    // console.log(res)
    let { data, meta } = res;
    if (meta.status === 200) {
      this.setState({
        imgList: data.list
      })
    }
  }

  //获取咨询列表
  getInfoList = async () => {
    let res = await this.axios.post(`homes/info`);
    // console.log(res)
    if(res.meta.status === 200){
      this.setState({
        infoList: res.data.list
      })
    }
  }

  //获取菜单数据
  getMenuList = async () => {
    let res = await this.axios.post('homes/menu');
    // console.log(res.data)
    if (res.meta.status === 200) {
      this.setState({
        menuList: res.data.list
      })
    }
  }

  //页面加载完成，需要发送请求获取轮播图数据
  componentDidMount() {
    this.getImgList();
    this.getMenuList();
    this.getInfoList();
  }

  render() {
    return (
      <div className='main'>
        <div className="search">
          <Input fluid icon={{ name: 'search', circular: true, link: true }} placeholder='搜房源'></Input>
        </div>
        <div className="main_content">
          <ImageGallery autoPlay showThumbnails={false} showPlayButton={false} showFullscreenButton={false} showBullets={true} items={this.state.imgList} />
          <Grid columns={4} padded>
          {/* padded的作用和在样式中清空margin一样的 */}
            <Grid.Row>
              {this.state.menuList.map(item => (
                <Grid.Column key={item.id}>
                  <Icon name='home' size='big'></Icon>
                  <p>{item.menu_name}</p>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
          <MainInfoList data={this.state.infoList}></MainInfoList>
        </div>
      </div>
    )
  }
}

export default Main
