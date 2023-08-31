import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({children})
{
    const [user, setUser] = useState();

    useEffect(() =>
    {
        const u = localStorage.getItem("loggedUser");
        
        if(u !== "undefined")
        {
            setUser(JSON.parse(u))
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem("loggedUser", JSON.stringify(user));
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}