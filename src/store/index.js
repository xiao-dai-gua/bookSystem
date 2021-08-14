import { createStore } from 'redux'

// 定义状态
let state = {
  number: 1,
  // list数组是todolist例子中用到的数据
  list: [
    {
      id: 1,
      name: '吃饭',
      isActive: true
    },
    {
      id: 2,
      name: '睡觉',
      isActive: false
    },
    {
      id: 3,
      name: '打豆豆',
      isActive: false
    }
  ]
}

// 定义action type
const ADD_NUM = 'ADD_NUM'
const REDUCE_NUM = 'REDUCE_NUM'
const ADD_LIST = 'ADD_LIST'
const REDUCE_LIST = 'REDUCE_LIST'
const CHANGE_LIST = 'CHANGE_LIST'

// 定义action creator 
// action creator 是一个方法 返回一个action（是一个对象）
function AddActionCreator(data) {
  // 方法返回一个action 可以理解为是一个动作
  // action有两个属性
  // type： 表示类型 比如说“加”这个操作
  // data 需要传的参数
  return {
    type: ADD_NUM,
    data
  }
}

function ReduceActionCreator(data) {
  return {
    type: REDUCE_NUM,
    data
  }
}

function AddListActionCreator(data) {
  return {
    type: ADD_LIST,
    data
  }
}

function ReduceListActionCreator(data) {
  return {
    type: REDUCE_LIST,
    data
  }
}

function ChangeListActionCreator(data) {
  return {
    type: CHANGE_LIST,
    data
  }
}

// reducer 纯函数 负责更新state的
// 接收一个旧的state 和 action
// 返回一个新的state
function reducer(preState=state, action) {
  console.log(action)
  switch(action.type) {
    case ADD_NUM:
      return Object.assign({}, preState, {
        number: preState.number+1
      })
    case REDUCE_NUM: 
      return Object.assign({}, preState, {
        number: preState.number - action.data
      })
    case ADD_LIST: 
      // 1.深拷贝state中的list 
      let arr = [...preState.list]
      // 2.向新数组中中追加一项
      arr.push({
        id: new Date().getTime(),
        name: action.data,
        isActive: false
      })
      // 3.设置state中的list
      return Object.assign({}, preState, {
        list: arr
      })
    case REDUCE_LIST: 
      // 调用filter方法 遍历数组 返回符合条件的一项 并组成新的数组返回 
      let arr2 = preState.list.filter(item => {
        return item.id != action.data
      })

      return Object.assign({}, preState, {
        list: arr2
      })
    case CHANGE_LIST:
      // 深拷贝list
      let arr3 = [...preState.list]
      // 遍历新数组，根据id修改对应项的isActive属性
      arr3.forEach(item => {
        if(item.id === action.data) {
          item.isActive = !item.isActive
        }
      })
      // 返回一个新的state
      return Object.assign({}, preState, {
        list: arr3
      })
    default:
      return preState
  }
  // return preState
}



const store =  createStore(reducer)

// 导出store和所有的action creator
export {
  store,
  AddActionCreator,
  ReduceActionCreator,
  AddListActionCreator,
  ReduceListActionCreator,
  ChangeListActionCreator
}
