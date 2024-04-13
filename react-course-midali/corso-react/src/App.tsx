
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <Router>
    <div className="App">
      <div className="Content">
        <Routes>
          <Route  path="/">
          </Route>
          <Route path="/create">
          </Route>
          <Route path="/blogs/:id">
          </Route>
          <Route path="*">
          </Route>
        </Routes>

      </div>
    </div>
    </Router>
    </>
  )
}

export default App
