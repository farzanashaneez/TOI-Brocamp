import React, { useEffect } from 'react'

const DisableRightClick = () => {
    useEffect(()=>{
       document.addEventListener('contextmenu',e=>{
        e.preventDefault()
        console.log('rightclick disabled')
       })
        return ()=>{
            document.removeEventListener('contextmenu',e=>{
                e.preventDefault()
                console.log('rightclick disabled')
               })
        }
    })
  return (
    <div>
      <h1>disable right click</h1>

    </div>
  )
}

export default DisableRightClick
