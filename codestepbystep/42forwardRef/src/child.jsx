import React from 'react'
import { forwardRef } from 'react'
import { ForwardedRef } from 'react'

function Child(props,ref) {
  return (
    <div>
      <input type="text" ref= {ref} name="" id="" />
    </div>
  )
}
export default forwardRef(Child)
