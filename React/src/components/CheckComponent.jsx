import React, { useRef, useState } from 'react'

const CheckComponent = () => {
  const [check,setChecked]=useState('true')
  const checkboxref=useRef()
  return (
    <div>
      <input ref={checkboxref} type="checkbox" checked={check}  onChange={e=>setChecked(s=>!s)} />
      <button onClick={()=>setChecked(s=>!s)}>toggle check</button>
    </div>
  )
}

export default CheckComponent
