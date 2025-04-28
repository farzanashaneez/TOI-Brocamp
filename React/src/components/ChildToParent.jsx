import React, { useState } from 'react'

const ChildToParent = () => {
    let [message,setMessage]=useState('no messages yet..!')
  return (
    <div>
      <h1>Child To Parent</h1>
      <h2>Parent</h2>
      <p>{message}</p>
      <Child setMessage={setMessage}/>
    </div>
  )
}
const Child=({setMessage})=>{
  const [inputValue, setInputValue] = useState("");
    return(<>
    <h3>Child</h3>
    <input type="text" onChange={(e)=>{console.log(e.target.value,"logging"); setInputValue(e.target.value);setMessage(e.target.value)}} value={inputValue} />
    </>)
}

export default ChildToParent
