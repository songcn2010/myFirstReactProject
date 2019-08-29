import React from 'react';
import Tloader from 'react-touch-loader'

import Message from '../infoMsg'

class PullLoader extends React.Component {
  constructor(){
    super()

    this.state = {
      hasMore: false,
      initializing: 1,

      //请求需要的参数
      pagenum: 0,
      pagesize: 2,

      list: [],
      total: ''
    }
  }

  render(){
    let {hasMore,initializing} = this.state;

    return (
      <Tloader hasMore={hasMore} initializing={initializing} onRefresh={this.refresh} onLoadMore={this.loadMore}>
        <Message data={this.state.list}></Message>
        {/* {this.props.type == 2? (<Message data={this.state.list}></Message>): ''} */}
      </Tloader>
    )
  }

  componentDidMount(){
    this.getList()
  }

  //获取数据
  getList = async () => {
    let res = await this.axios.post('infos/list',{
      type: this.props.type,
      pagenum: this.state.pagenum,
      pagesize: this.state.pagesize
    });
    // console.log(res)
    if(res.meta.status === 200){
      this.setState({
        hasMore: this.state.pagenum + this.state.pagesize < res.data.list.total,
        initializing: 2,
        total: res.data.list.total,
        list: this.state.list.concat(res.data.list.data),
        pagenum: this.state.pagenum + this.state.pagesize
      })
    }
  }
  refresh = (resolve,reject) => {
    // react中的setState是异步的,所以用个定时器
    this.setState({
      hasMore: false,
      initializing: 1,
      pagenum: 0,
      list: [],
      total: ''
    });
    setTimeout( () => {
      // console.log(this.state.pagenum)
      this.getList();
      resolve();
    }, 0)
  }

  loadMore = (resolve,reject) => {
    this.getList();
    resolve()
  }
}

export default PullLoader