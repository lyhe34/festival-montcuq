import React from 'react'
import { Link } from 'react-router-dom'

export default function AddArticle({onAdd}) {
  return (
    <>
    <form onSubmit={onAdd}>
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
