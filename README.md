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
