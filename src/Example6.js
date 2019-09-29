import React, { useRef, useState, useEffect } from 'react'
export default function Example6() {
  const val = useRef(null)
  const tang = () => {
    val.current.value = 'hello tang'
    console.log(val)
  }
  const [text, setText] = useState('tang')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log('textRef.current', textRef.current)
  })
  return (
    <div>
      <input ref={val} type='text' />
      <button onClick={tang}>input show text</button>
      <br />
      <br />
      <input value={text} onChange={(e) => { setText(e.target.value) }} />
    </div>
  )
}