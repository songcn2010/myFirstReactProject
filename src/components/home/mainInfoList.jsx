import React from 'react';
import { Item, Icon } from 'semantic-ui-react';

const MainInfoList = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <Item.Group unstackable>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://47.96.21.88:8086/public/zixun.png' />
          <Item.Content>
            {data.map(item => (
              <div key={item.id}>{item.info_title}</div>
            ))}
            <Icon color='black' size='large' name='angle right'></Icon>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  )
}

export default MainInfoList