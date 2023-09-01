import React from 'react'

export default function UseLog(message) {
  return (
    <>
      <div>Ref</div>
useEffect(() => {
        console.log(message)};
      ), [message]

    </>
  )
}
