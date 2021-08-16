import React, { Component } from 'react'
import { connect } from 'react-redux'
//!使用store,第一步建立一个文件并且编写然后在想要用的文件里面引入相应的方法
import { ReduceListActionCreator, ChangeListActionCreator } from '../store/index'

//!第二步将store中的state映射到props
function mapStateToProps(state){
    return{
        showlist:state.list
    };//TODO 记住是返回的是一个对象
}
//! 第三步调用其中的方法
function mapDispatchToProps(dispatch){
    return{
        del:(id)=>{
            dispatch(ReduceListActionCreator(id))
        },
        change:(id)=>{
            dispatch(ChangeListActionCreator(id))
        }
    }
}
export class List extends Component {
    delFun(id){
        this.props.del(id);
    }
    changeFun(id){
        this.props.change(id);
    }
    render() {
        return (
            <div>
                <h1>列表展示</h1>
                <ul>
                    {/* //TODO 必须要加上大括号 */}
                    {
                    this.props.showlist.map(obj=>{
                        return(
                            <li key={obj.id} className={obj.isActive ? 'active' : ''}>
                            <input type="checkbox" defaultChecked={obj.isActive} onChange={this.changeFun.bind(this, obj.id)} />
                            <span>{obj.name}</span>
                            <button onClick={this.delFun.bind(this, obj.id)}>del</button>
                          </li>
          
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
