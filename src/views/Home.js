//Todo rrc 快速生成框架
import React, { Component } from 'react'
import { connect } from 'react-redux'


//! ea6语法变量字符串拼接 (`/data/active${params.id}.json`)
export class Home extends Component {
    constructor(){
        super()
        this.information = this.information.bind(this)
    }

    information(){
        //!第一种通过配置路由的时候传参
    //    console.log(this.props.match.params.id)

       //!第二种支持在配置路由的时候传递多个参数
       //search属性在路由跳转的时候传递的是一个字符串
        let {search} = this.props.location
        let params = new URLSearchParams(search)
        console.log('id:',params.get('id'))
        console.log('key:',params.get('key'))

        //!第三种方法获取路由传递的参数
        // this.props.location.state获取路由跳转时传递的state属性
        let {state} = this.props.location
        console.log(state.name);
    }
    render() {
        return (
            <div>
                <h1 onClick={this.information}>组件间传参的几种方式</h1>
                <h2>hahhh</h2>
            </div>
        )
    }
}



export default Home;
