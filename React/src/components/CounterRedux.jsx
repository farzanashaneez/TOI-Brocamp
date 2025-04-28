import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../redux/counterSlice'

const CounterRedux = () => {
    let counterSice=useSelector(s=>s.counter)
    let dispatch=useDispatch()
  return (
    <div>
      <h1>Redux Counter</h1>
     <div style={{display:'flex',justifyContent:'center' }}> 
     <button onClick={()=>{dispatch(dec())}}>-</button>
      <h2>{counterSice.value}</h2>
      <button onClick={()=>{dispatch(inc())}}>+</button>
      </div>
    </div>
  )
}

export default CounterRedux
