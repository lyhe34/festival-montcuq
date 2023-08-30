import react, { createContext } from 'react'


export const MyContext = createContext()

export const MyContextProvider = ({children}) => {


    const etudiant = {
        name: "TOTO",
        age: 30
    }

 return (
    <MyContext.Provider value={etudiant}>
        {children}
    </MyContext.Provider>
 )
}