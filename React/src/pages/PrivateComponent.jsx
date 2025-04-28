import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = ({user}) => {
    if(!user){
        return <><Navigate to='/home' replace /></>
    }
  return (
    <div>
      <h1>Protected Page</h1>
      <Outlet/>
    </div>
  )
}

export default PrivateComponent
