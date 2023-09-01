import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({children})
{
    const getLoggedUser = () =>
    {
        const u = localStorage.getItem("loggedUser");

        return u ? JSON.parse(u) : null;
    }

    const [user, setUser] = useState(getLoggedUser);

    useEffect(() =>
    {
        if(user)
        {
            localStorage.setItem(user.name, JSON.stringify(user));
            localStorage.setItem("loggedUser", JSON.stringify(user));
        }
        else
        {
            localStorage.setItem("loggedUser", null);
        }
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}