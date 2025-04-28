import React from 'react'
import { useMyContext } from '../context/myContext'

const ContextCounter = () => {
    let {count,inc,dec,reset}=useMyContext()
  return (
    <div>
      <h1>Context counter</h1>
      <h3>{count}</h3>
      <button onClick={()=>dec()}>-</button>
      <button onClick={()=>inc()}>+</button>
      <button onClick={()=>reset()}>resset</button>
    </div>
  )
}

export default ContextCounter
