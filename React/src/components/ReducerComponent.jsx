import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch (action.type){
        case 'inc':return({value:state.value+1});
        case 'dec':return({value:state.value-1});
        case 'rst':return{value:0};
        default:return state
    }
}

const ReducerComponent = () => {
    const [state,dispatch]=useReducer(reducer,{value:0})
  return (
    <div>
      <h1>Reducer Component</h1>
      <h3>{state.value}</h3>
      <button onClick={()=>dispatch({type:'dec'})}>-</button>
      <button onClick={()=>dispatch({type:'inc'})}>+</button>
      <button onClick={()=>dispatch({type:'rst'})}>rst</button>
    </div>
  )
}

export default ReducerComponent
