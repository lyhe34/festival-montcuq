import '../styles/App.css';
import Logo from './Logo';
import Message from './Message';
import Counter from './Counter';
import Chronometre from './Chronometre';
import Hour from './Hour';
import SayHello from './SayHello';
import Panier from './Panier';
import Shop from './Shop';
import Ref from './Ref';
import useLog from './useLog';
import Login from './Login';
import useLocalStorage from './useLocalStorage';
import Calorie from './Calorie';
import Tasks from './ListTask/Tasks';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './Nav';
import PanierView from './PanierView';
import { useState } from 'react';
import ArticlesList from './Blog/ArticlesList';
import ArticleDetails from './Blog/ArticleDetails';
import AddArticle from './Blog/AddArticle';
import { MyContextProvider } from './MyContext';
import ExempleContext from './ExempleContext';

function App() {
  
  const monTexte = "Je fais du ReactJS"

  useLog("Mon message")

  const [id, setId] = useLocalStorage('login')
  const [pass, setPass] = useLocalStorage('password')
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false)

  const [articles, setArticles] = useState([
    {id: 1, title: "Astuces react", author: "Eryan", tag: "React", description: "N°1 ne rien lacher"},
    {id: 2, title: "Astuces PHP", author: "Luc", tag: "PHP", description: "Pas ouf"},
  ])

  const navigate = useNavigate()

  const handleSubmit = e => {
    const login = e.target.login.value
    const password = e.target.password.value
    if(login === 'id' && password === 'mdp'){
      setId(login)
      setPass(password)
      setIsLogged(true)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const articleLength = articles.length
    const newId = articleLength !== 0 ? articleLength + 1 : 1
    const addElement = {id: newId, title: e.target.title.value, author: e.target.author.value, tag: e.target.tag.value, description: e.target.description.value}
    setArticles([...articles, addElement])
  }
  

  return (
    <div className="App">
      <header className="App-header">

        { !isLogged ? (
          <Login onSubmit={handleSubmit} />
        ) : (
          <>
          <Nav />
          <Logo />
          <Routes>
            <Route path="/" element={<SayHello /> }/>
            <Route path="/message" element={<Message text={monTexte}/>}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="/chronometre" element={<Chronometre />}/>
            <Route path="/hour" element={<Hour />}/>
            <Route path="/panier" element={<Panier />}/>
            <Route path='/panier/:name/:id' element={<PanierView />} />
            <Route path="/shop" element={<Shop />}/>
            <Route path="/ref" element={<Ref />}/>
            <Route path="/calorie" element={<Calorie />}/>
            <Route path="/task" element={<Tasks />}/>
            <Route path="/articles" element={<ArticlesList articles={articles}/>}/>
            <Route path="/articles/:id" element={<ArticleDetails articles={articles}/>}/>
            <Route path="/add-article" element={<AddArticle onAdd={handleAdd}/>}/>

          </Routes>

          <MyContextProvider>
            <ExempleContext />
          </MyContextProvider>
          </>
        
        )}
        
      </header>
    </div>
  );
}

export default App;
