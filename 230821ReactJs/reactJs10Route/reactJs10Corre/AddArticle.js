import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../MyContext'

export default function AddArticle() {

    const {handleAdd} = useContext(MyContext)
  return (
    <>
    <form onSubmit={handleAdd}>
        <label>title</label>
        <input id="title"/>
        <label>Author</label>
        <input id="author"/>
        <label>tag</label>
        <input id="tag"/>
        <label>description</label>
        <input id="description"/>
        <button type='submit'>Valider</button>
    </form>
    <Link to="/articles"> Retour </Link>
    </>
    
  )
}
