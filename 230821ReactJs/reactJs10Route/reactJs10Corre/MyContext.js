import react, { createContext, useState } from 'react'


export const MyContext = createContext()

export const MyContextProvider = ({children}) => {

    const [articles, setArticles] = useState([
        {id: 1, title: "Astuces react", author: "Eryan", tag: "React", description: "N°1 ne rien lacher"},
        {id: 2, title: "Astuces PHP", author: "Luc", tag: "PHP", description: "Pas ouf"},
      ])

      const handleAdd = (e) => {
        e.preventDefault()
        const articleLength = articles.length
        const newId = articleLength !== 0 ? articleLength + 1 : 1
        const addElement = {id: newId, title: e.target.title.value, author: e.target.author.value, tag: e.target.tag.value, description: e.target.description.value}
        setArticles([...articles, addElement])
      }

      const data = {
        articles,
        handleAdd
      }

 return (
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
 )
}