import React, { Suspense } from 'react'
const lazyComponent=React.lazy(()=>{return import('./component')})

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <lazyComponent/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
