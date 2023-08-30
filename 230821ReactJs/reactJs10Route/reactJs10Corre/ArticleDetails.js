import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../MyContext'

export default function ArticleDetails() {
    const {articles} = useContext(MyContext)

    const { id } = useParams()

    const article = articles.find(article => article.id === parseInt(id))

  return (
    <div>
        <h2>{article.article}</h2>
        <p>{article.author}</p>
        <p>{article.tag}</p>
        <p>{article.description}</p>
        <Link to="/articles">Retour</Link>
    </div>
  )
}
