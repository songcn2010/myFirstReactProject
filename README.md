# 项目介绍
- 基于react+react-router+rudux技术栈开发的一个租房项目
---
## 通过`create-react-app`创建一个项目
```npm
create-react-app 项目名
```
## 1. 引入路由模块
+ 安装
```bash
npm i react-router-dom
```
+ 配置路由规则，路由组件并测试

---

## 2. 引入semantic-ui-react组件库
- 安装
```npm
npm i semantic-ui-react
npm i semantic-ui-css
```
- 在`index.js`中引入样式文件
```jsx
import 'semantic-ui-css/semantic.min.css'
```
- 在要用到某个ui组件的地方引入对应组件，这是**按需加载**的
  - 例如，要用一个按钮
  ```jsx
    import {Button} from 'semantic-ui-react'
  ``` 
- 注意`Form`组件的使用，内部有配置的点选组件，不需要额外加载类似`Input`、`Button`等组件，直接用`Form`自带的即可，这样可以较少加载项，提高性能
---
## 3. 登录页
### 3.1 `axios`的使用
- 由于多个组件会用到，所以在`index.js`中，把`axios`绑定在`React.Component.prototype`上
- 根据接口设置`axios`的基本路径
- 拦截器的设置
### 3.2 编程式导航
- `import { withRouter } from 'react-router-dom'`
- `export default withRouter(Login)`
- 这样就能在组件中通过`props`获取到`history`对象，里面有各种跳转方式
- `semantic-ui-react`的使用

---
## 4. 进入界面后
### 4.1 将主界面作为一个大的出口`Route`
### 4.2 下面都是`NavLink`
### 4.3 设置子组件

--- 
## 5. `main`页面
### 5.1 轮播图组件`react-iamge-gallery`的使用
- 参考`github`文档 
[文档地址](https://github.com/xiaolin/react-image-gallery)