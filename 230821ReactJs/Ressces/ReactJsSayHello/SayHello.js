import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function SayHello() {

    const [user, setUser] = useLocalStorage('user')

    const [name, setName] = useState(user)

    useEffect(() => {
        setUser(name)
    }, [name, setUser])
    
    return (
    <div>
        <h1>Bonjour, {name}</h1>
        <input 
            type='text'
            onChange={e => setName(e.target.value)}
        />
    </div>
  )
}
