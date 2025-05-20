import { useState } from 'react'
 import './App.css'
// import BlogEditor from './components/BlogEditor'
// import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DraftList from './components/DraftList'
function App() {
  const [count, setCount] = useState(0)
const [publishedBlog,setPublishedBlog]=useState([])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<EditorPage/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/blogs/:id'element={<BlogDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/> }/>
         <Route path='/drafts' element={<DraftList/>}/>
  </Routes>
 
    </Router>
  )
}

export default App
