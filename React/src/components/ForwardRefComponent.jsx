import React, { forwardRef } from 'react'

const ForwardRefComponent = ({},ref) => {

  return (
    <div>
      <div ref={ref} style={{color:'red'}}>Style Me</div>
    </div>
  )
}


export default forwardRef(ForwardRefComponent)
