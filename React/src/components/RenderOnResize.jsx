import React, { useEffect, useState } from 'react'

const RenderOnResize = () => {
let [size,setSize]=useState({width:window.innerWidth,height:window.innerHeight})
useEffect(()=>{
    window.addEventListener('resize',(e)=>{
        setSize({width:window.innerWidth,height:window.innerHeight})
    })
    return ()=>{
        window.removeEventListener('resize',(e)=>{
            setSize({width:window.innerWidth,height:window.innerHeight})
        })
    }
},[])
  return (
    <div>
      <h4>Resize Component:height:{size.height},width:{size.width}</h4>

    </div>
  )
}

export default RenderOnResize
