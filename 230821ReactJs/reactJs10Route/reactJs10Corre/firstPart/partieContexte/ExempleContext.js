import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export default function ExempleContext() {

    const dataContext = useContext(MyContext)
  return (
    <div>
        <h2>{dataContext.name}</h2>
        <p>{dataContext.age}</p>
    </div>
  )
}
