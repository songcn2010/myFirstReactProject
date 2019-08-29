import React from 'react';
import { Item } from 'semantic-ui-react'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    // console.log(this.props.data)
    // console.log(window.btoa('songchao'))
    return (
      <Item.Group unstackable>
        {this.props.data.map(item => (
          <Item key={item.id}>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/1.png' />
          <Item.Content>
            <Item.Header as='a'>{item.info_title}</Item.Header>
            <Item.Meta>Description</Item.Meta>
          </Item.Content>
        </Item>
        ))}
      </Item.Group>
    )
  }
}

export default Message