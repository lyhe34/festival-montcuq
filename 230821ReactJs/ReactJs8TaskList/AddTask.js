import React from 'react'

export default function AddTask({onAdd}) {
  return (
    <form onSubmit={onAdd}>
        <input />
        <button>+</button>
    </form>
  )
}
