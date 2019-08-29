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

### 5.2 上拉加载，下拉刷新第三方插件的使用
- 安装
```npm
npm install react-touch-loader
```
- 参考文档
[文档](https://github.com/Broltes/react-touch-loader#readme)
- 让`react`框架支持`less`
  - 安装`less`支持包
    ```npm
      npm i less less-loader -D
    ```
  - 在项目配置文件中让项目支持`less`
    - 可以在本地`node_modules`中的`react-scripts`中找到`webpack.config.js`
    - 可以通过`npm run eject`暴露所有配置包，在这里修改
  - 现在文件中找到配置样式的规则，大概在50多行
  ```js
    //配置less的校验规则
    const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;
  ```
  - 在500行左右，配置less的use规则
  ```js
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
      ),
      sideEffects: true,
    },
    {
      test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
      ),
    },
  ```
- 组件属性配置解析
  - `canRefreshResolve` 能否下拉刷新
  - `listen`  总的数量
  - `hasMore` 是否有更多数据
  - `initializing`  0-不显示进度条；1-显示进度条；2-结束进度条
  - `refresheAt` 刷新时间(没啥作用)
- 组件的方法
  - `onRefresh`绑定下拉刷新事件 ,有两个参数`(resolve,reject)`
    - `resolve`表示能下拉刷新的时候
    - `reject` 表示不能下拉刷新的时候
  - `onLoadMore` 绑定上拉加载时间，参数`resolve`
- 一般在加载的钩子函数中，请求获得数据，设置某些属性
- 可以把该组件做成一个功能组件，在需要的时候使用

---
## 6. 个人中心
### 6.1 模态框Modal的使用
- 注意父子组件间的传值，数据都在父组件(除了单独调控的数据，不需要传递的)
### 6.2 图片裁切插件`react-avatar-editor`
- 安装
```bash
  npm i react-avatar-editor
```