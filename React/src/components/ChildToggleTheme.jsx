import React from 'react'
import { useTheme } from '../customHooks/customHooks'

const ChildToggleTheme = () => {
    const {theme,toggle}=useTheme()
  return (
    <div>
      <h1>{theme} theme</h1>
      <div style={{backgroundColor:theme==='light'?'#f2f2f2':'#333333'}}> 
        <button onClick={toggle}>toggle me</button>
      </div>
    </div>
  )
}

export default ChildToggleTheme
