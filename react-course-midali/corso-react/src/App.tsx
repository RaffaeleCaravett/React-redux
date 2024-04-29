
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

import Nav from './nav.tsx'
import Fot from './foot.tsx'
import Home from './Home.tsx';
import Blog from './Blog.tsx';
import Login from './Login.tsx';

function App() {



  return (
    <>
    <Router>
       <Nav />  
    <div className="App">
      <div className="Content">
        <Routes>
          <Route  path="/Home" element={<Home />}>
          </Route>
          <Route path="/Blog"  element={<Blog />}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
          <Route path="*">
          </Route>
        </Routes>
      </div>
    </div>
      <Fot />
       </Router>
    </>
  )
}

export default App
