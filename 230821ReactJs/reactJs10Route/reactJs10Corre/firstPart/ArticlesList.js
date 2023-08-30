import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ArticlesList({articles}) {
    const [filter, setFilter] = useState() //la recherche

    const filterArticle = filter ? articles.filter(article => article.tag === filter) : articles

  return (
    <div>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
            {
                articles.map(article => (
                    <option value={article.tag}>{article.tag}</option>
                ))
            }
        </select>
        <ul>
            {
                filterArticle.map(article => (
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </li>
                ))
            }
        </ul>
        <Link to="/add-article"><button>Ajouter un article</button></Link>
    </div>
  )
}
