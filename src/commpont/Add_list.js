import { func } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddListActionCreator } from '../store/index'

function mapStateToProps (state){
    return{
        showlist:state.list
    }
}
function mapDispatchToProps(dispatch){
    return{
        add:(data)=>{
            dispatch(AddListActionCreator(data));
        }
    }
}
export class Add_list extends Component {
    constructor(){
        super()
        this.myInput = React.createRef();
        this.add_list = this.add_list.bind(this);
    }
    add_list(){
        this.props.add(this.myInput.current.value)
        this.myInput.current.value = ""
    }
    render() {
        return (
            <div>
                <h1>列表增加</h1>
                <input type="text" ref={this.myInput}></input> 
                <button onClick={this.add_list}>增加</button>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Add_list)
