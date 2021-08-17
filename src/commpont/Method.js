import React, {useState, useMemo, memo, useCallback} from 'react';

// function Child (props) {
//   console.log('子组件render')
//   return (
//     <div>
//       <h3>子组件</h3>
//       <p>父组件的count：{props.count}</p>
//     </div>
//   )
// }

const Child = memo((props)=> {
  console.log('子组件render')

  const fn = ()=> {
    console.log('子组件fn方法')
    props.fun()
  }
  return (
    <div>
      <h3>子组件</h3>
      <p>{props.params.count}</p>
      <button onClick={fn}>点击调用父组件的方法</button>
    </div>
  )
})

function Method(props) {
  const [count, setCount] = useState(1)
  const [number, setNum] = useState(10)

  const changeCount = ()=> {
    setCount(count+1)
  }
  const changeNum = ()=> {
    setNum(number-1)
  }

  // const fun = ()=> {
  //   console.log('function')
  // }

  const fun = useCallback(()=> {
    console.log('function')
  }, [])//todo 向子类传递想要的方法
  

  /* 
    useMemo(callback, array)
      callback是一个函数用于处于罗会计
      array 控制useMemo重新执行的数组，只有array内容发生变化 才会重新执行
  */
  const params = useMemo(() => {
    return {
      count
    }
  }, [])//todo 向子类传递所需要的参数

  return (
    <div>
      <h1>性能优化</h1>
      <p>count:{count}</p>
      <button onClick={changeCount}>点击修改count</button>

      <p>number:{number}</p>
      <button onClick={changeNum}>点击修改number</button>

      <Child params={params} fun={fun} />
      <button onClick={fun}>点击触发父组件自己的fun方法</button>
    </div>
  );
}

export default Method;
