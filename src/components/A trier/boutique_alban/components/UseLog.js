import React, { useEffect } from 'react'

export default function UseLog(message) {

  useEffect(() =>
  {
    console.log(message);
  }, [message])

  return (
    <>
      <div>Ref</div>
    </>
  )
}
