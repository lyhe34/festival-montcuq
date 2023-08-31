import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({children})
{
    const [user, setUser] = useState();

    useEffect(() =>
    {
        setUser(localStorage.getItem("loggedUser"));
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}