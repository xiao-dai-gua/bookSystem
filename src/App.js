import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './views/Main'
import Home from './views/Home'
import Navigator from './views/navigator'
import Redirect_1 from './views/Redirect';

//!无状态function的引入
import Com from './commpont/Com'
import Cont from './commpont/Cont';
import Method from './commpont/Method'
import {useState} from 'react'


function App() {
  const [isShow,changeShow] = useState(false);
  const changeFun =()=>{
    changeShow(!isShow)
  }
  return (
    <div className="App">
      <button onClick={changeFun}>切换isshow</button>
      {
        isShow?<Com/>:null
      }
      <Cont/>
      <Method/>
       {/* 
          路由匹配 默认模糊匹配
          exact 精确匹配 只有路径完全相同才会被匹配到
      */}

     <Link to="/main">Main</Link> |  
     {/* <Link to="/Home/12334">  Home</Link> */}
      {/* 
         to(字符串): 跳转地址
         to = {
           pathname: 跳转的路径
           search: 查询的参数 是字符串类型，如果传多个参数中间用&链接
           hash: URL中的hash
           state: {} 如果使用HashRouter模式页面刷新 state参数会丢失
         }
      */}

     <Link to={
       {
        pathname:"/home",
        search:'key=132&id=123',
        hash:'xm',
        state:{
          name:'zs',
          age:12
         }, 
         //todo不是官方提供的路由跳转传递的参数，能在location中拿到但是一刷新就没有了
        query:{
          channel:123
        }
       }
     }>Home</Link> | 
     <Link to='/navigator'> navigator</Link> |
     <Link to='/redirect'>redirect</Link>
     <Route path="/main" component={Main}></Route>
     {/* <Route path="/home/:id" component={Home}></Route> */}
     <Route path="/home" component={Home}></Route>
     <Route path="/navigator" component={Navigator}></Route>
     <Route path="/redirect" component={Redirect_1}></Route>
    </div>
  );
}

export default App;
