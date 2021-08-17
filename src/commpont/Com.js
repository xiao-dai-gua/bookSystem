//todo useState:用来声明状态（state)
//todo useEffect:将class组件中的componentDidMount componentDidUpdate componentWillUnmount合成一个方法
//todo sueRef:类似于class组件中的createRef()
import React,{useState,useEffect,useRef}from 'react'

function Com(props){
    /*  
        todo useState(params)
        params 对状态进行初始化
        方法返回一个数组
        数组的第0项是当前的state
        数组的第1箱是修改状态的方法
  */
    //! useState 初始化state为1  修改值时调用用setCount
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{id:1,name:'za',age:18},{id:2,name:"zd",age:20}])
    
    //! useRef 类似于 createRef 返回一个ref对象
    const myInput  = useRef(null);

    /* useEffect: componentDidMount componentDidUpdate componentWillUnmount
      useEffect(callback, array)
      通过array来控制当前useEffect方法的执行
      默认不传array 会在componentDidMount componentDidUpdate时执行
      []会在componentDidMount时执行
      第二个参数（[]）里传了某个属性 就代表只有这个属性发生变化才会执行这个方法
  */

      useEffect(()=> {
        // componentDidMount
        console.log('render')
    
        return ()=> {
          // componentWillUnmount 
          console.log('componentWillUnmount')
        }
      }, [])
      useEffect(()=> {
        // componentDidMount componentDidUpdate
        console.log('componentDidMount componentDidUpdate')
        // [count]：只有count发生变化 才会进入到这个方法里面
      }, [count])
    
      useEffect(()=> {
        return() => {
          // componentDidUpdate componentWillUnmount
          console.log('render')
        }
      }, [count])
    
      // 定义一个事件处理函数 调用setCount修改count的值
      const changeCount = ()=> {
        //!自带的修改state中的值
        setCount(count+1)
      }
      const addList = ()=>{
        // myInput.current 拿到具体的DOM元素（input->myInput.current
        
        let _list = [...list]
        _list.push({
          id: new Date().getTime(),
          name: myInput.current.value,
          age: 20
        })
        setList(_list)
      }
    
      return (
        <div>
          <h1>函数组件</h1>
          <p>count: {count}</p>
          <button onClick={changeCount}>修改count</button>
          <ul>
            {
              list.map(obj=> {
                return(
                  <li key={obj.id}>
                    姓名：{obj.name}
                    年龄：{obj.age}
                  </li>
                )
              })
            }
          </ul>
          <div>
            {/* 给DOM元素绑定ref属性值是定义好的useRef返回的ref对象 */}
            <input type="text" ref={myInput} />
            <button onClick={addList}>add list</button>
          </div>
        </div>
      );
    }
    
    export default Com;
    