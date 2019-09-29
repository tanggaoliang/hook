import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Example() {
  const [count, setCount] = useState(0);
  //---关键代码---------start-------
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return ()=>{
      console.log('====================')
  }
  },[count])
  //---关键代码---------end-------
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}></Route>
        <Route path='/list/' component={List}></Route>
      </Router>
    </div>
  )
}
export default Example;
function Index() {
  useEffect(() => { 
    console.log('useEffect index')
   })
  return <h2>Index</h2>;
}

function List() {
  useEffect(() => { 
    console.log('useEffect List')
   })
  return <h2>List</h2>;
}