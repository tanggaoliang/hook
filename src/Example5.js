import React, { useState, useMemo } from 'react'
export default function Example7() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  return (
    <div>
      <button onClick={() => { setNum1(num1 + 1) }}>num1</button>
      <button onClick={() => { setNum2(num2 + 1) }}>num2</button>
      <ChildComponent num={num1}>num2:{num2}</ChildComponent>
    </div>
  )

}
function ChildComponent({ num, children }) {
  function changeNum1(num) {
    console.log('function1')
    return 'num1:' + num
  }

  const actionChangeNum1 = useMemo(() =>  changeNum1(num) , [num])
  return (
    <>
      <div>{actionChangeNum1}</div>
      <div>{children}</div>
    </>
  )
}