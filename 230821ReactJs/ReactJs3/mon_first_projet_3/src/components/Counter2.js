import React, {useEffect, useState} from 'react';


export default function Counter2() {

        const [count, setCount] = useState(0); // hook d'état

            useEffect(() => {
                document.title = `compteur à ${count}`;
            }, [count])

        const increment = () => {
            setCount(count + 1)
        }
        const decrement = () => {
            setCount(count-1)
        }

        return (
            <>
            <div>{count}</div>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
            </>
        )

}