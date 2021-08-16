import React, { Component } from 'react'
import { connect } from 'react-redux'

export class navigator extends Component {
    //todo 编程式导航this.props.history属性下提供了路由跳转的方法

    goBack(){
        //TOdo 返回上一个页面
        //this.props.history.goBack()
        this.props.history.goBack(-1)
    }
    goForward(){
        //todo 进入下一个页面
        //this.props.history.goForward()
        this.props.history.go(1);
    }
    /**
     *  todo push()进入到某一个页面 此用法用的最多
     *  参数
     *    1.字符串 进入页面的路径
     *    2.对象 {
     *      pathname: 跳转的路径
            search: 查询的参数
            hash: URL中的hash
           //! state: {} 如果使用HashRouter模式页面刷新 state参数会丢失
     *    }
     */
    

    pushFun(){
        this.props.history.push({
            pathname:'/Home',
            state:{
                key:123
            }
        })
    }

    replaceFun() {
        //todo 使用方式同push一样，只不过不会在history中增加一条历史记录
        //todo 意味着直接跳转到首页
        this.props.history.replace('/Home')
      }
    

    render() {
        return (
            <div>
                <h1>路由跳转</h1>
                <button onClick={this.goBack.bind(this)}>goBack</button>
                <button onClick={this.goForward.bind(this)}>goForward</button>
                <button onClick={this.pushFun.bind(this)}>push</button>
                <button onClick={this.replaceFun.bind(this)}>replace</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(navigator)
