//todo userContext解决多层级组件传值的问题
import React,{useContext} from 'react'
import myContext from'../context/myContext'
import Test from './Test'

function Child(props){
    const data  = useContext(myContext)
    console.log(data)
    return(
        <div>
            <h2>子组件</h2>
            <p>number:{data}</p>
            <Test />
        </div>
    )
}
export default Child;