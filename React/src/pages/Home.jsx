import React, { useEffect, useRef } from 'react'
import CounterRedux from '../components/CounterRedux'
import ChildToParent from '../components/ChildToParent'
import ContextCounter from '../components/ContextCounter'
import ChildToggleTheme from '../components/ChildToggleTheme'
import RenderOnResize from '../components/RenderOnResize'
import DisableRightClick from '../components/DisableRightClick'
import CheckComponent from '../components/CheckComponent'
import ForwardRefComponent from '../components/ForwardRefComponent'
import HOCComponent from '../components/HOCComponent'
import ReducerComponent from '../components/ReducerComponent'
import AutoCompletion from '../components/AutoCompletion'
import ToDoList from '../components/ToDoList'

const Home = () => {

  useEffect(()=>{
    const fetchurl=()=>{
      fetch('http://localhost:3000/protected',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer mytoken'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
      .catch(e=>{
        clg(e)
      })
    }
    fetchurl();

  })
  const textref=useRef(null)
  const handleChange=()=>{
    console.log('ref triggered')
    textref.current.style.color='blue'
}
  return (
    <div>
       <h1>TOI Practice</h1>
       <ToDoList/>
     <CounterRedux/>
     <ChildToParent/>
     <ContextCounter/>
     <ChildToggleTheme/>
     <RenderOnResize/>
     <DisableRightClick/>
     <CheckComponent/>
     <ForwardRefComponent ref={textref}/>
     <button onClick={handleChange}>change color</button>
     <HOCComponent name='farzana' age='25'/>
     <ReducerComponent/>
     <AutoCompletion/>
    </div>
   
  )
}

export default Home
