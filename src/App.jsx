import './App.css'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home'

function App() {
 

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
     )
}

export default App
