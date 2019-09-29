import React, { useState, useEffect, useCallback } from 'react'
export default function Example7() {
  const size=useWinSize()

  return (
    <div>width:{size.width},height:{size.height}</div>
  )
}
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[])

  useEffect(() => { 
    window.addEventListener('resize',onResize)
    return () => { 
      window.removeEventListener('resize',onResize)
     }
   })

   return size;
}