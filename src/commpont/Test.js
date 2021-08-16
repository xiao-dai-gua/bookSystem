import { func } from 'prop-types'
import React, {useContext} from 'react'
import { connect } from 'react-redux'
import myContext from '../context/myContext'

function Test(props){
    const data = useContext(myContext)
    
    return(
        <div>
            <h6>hhhhhhh小组件</h6>
            <p>number:{data}</p>
        </div>
    )
}
export default Test;