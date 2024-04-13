
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

import Nav from './nav.tsx'
import Fot from './foot.tsx'
function App() {

  return (
    <>
    <Router>
       <Nav />  
    <div className="App">
      <div className="Content">
        <Routes>
          <Route  path="/Home">
          </Route>
          <Route path="/Blogs">
          </Route>
          <Route path="/Login">
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
