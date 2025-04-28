import React from 'react'
const toDoArray=[
    { task: 1, status: false },
    { task: 2, status: false },
    { task: 3, status: true },
    { task: 4, status: false },
    { task: 5, status: false },
    { task: 6, status: true },
    { task: 7, status: false },
    { task: 8, status: false },
    { task: 9, status: false }
  ]
  
const ToDoList = () => {
    const handleTask=(i)=>{
        console.log(i)
        toDoArray[i].status=! toDoArray[i].status
        console.log(toDoArray)
    }
  return (
    <div>
      <ul style={{listStyleType:'none', padding:0}}>
        {toDoArray.map((list,i)=> <li key={i}>{list.task}<input type='checkbox'  onChange={()=>handleTask(i)}/></li>)}
       
      </ul>
    </div>
  )
}

export default ToDoList
