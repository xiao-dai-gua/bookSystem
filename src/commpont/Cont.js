//todo useReducer类似于redux中的reducer
import React,{useReducer} from'react'

import Child from './Chil'

import myContext from '../context/myContext';

// 初始化状态
const initialState = {
    number: 10
  }
  
  // 定义action里的type
  const ADD_NUM = 'ADD_NUM'
  
  // 定义reducer（纯函数）修改各个状态
  // 函数接收一个旧的state，和action 返回一个全年新的state
  const reducer = (preState=initialState, action)=> {
    switch(action.type){
      case ADD_NUM:
        // 返回一个新的state
        // return Object.assign({}, preState, {
        //   number: preState.number+action.data
        // })
        return {...preState, number: preState.number+action.data}
      default:
        return preState
    }
  }
  
  function Cont(props) {
    /**
     * useReducer(reducer, initialState)
     *  需要两个参数，第一个参数是一个reducer（纯函数），第二个参数是初始的state
     *  方法返回一个数组（最好用解构的语法接收）
     *    数组第0项是state
     *    数组第一项是dispatch函数
     */
    const [state, dispatch] = useReducer(reducer, initialState)
  
    const addFun = ()=> {
      // 调用dispatch要传入一个action
      // action跟redux中的action一样是一个object
      dispatch({
        type: ADD_NUM,
        data: 2
      })
    }
  
    return (
      <div>
        <h1>计数器组件</h1>
        <p>number: {state.number}</p>
        <button onClick={addFun}>点击修改state中的number</button>
  
        <myContext.Provider value={state.number}>
          <Child />
        </myContext.Provider>
      </div>
    );
  }
  
  export default Cont;
  