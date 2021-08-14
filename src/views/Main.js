import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route ,Link } from 'react-router-dom'
import Add_list  from '../commpont/Add_list'
import List from '../commpont/List'
export class Main extends Component {
    render() {
        return (
            <div>
               <Add_list/>
               <List/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
