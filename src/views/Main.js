import React, { Component } from 'react'
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


export default Main
