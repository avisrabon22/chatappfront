import './App.css'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { ChatRoom } from './Components/ChatRoom'

function App() {
 

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat_room" element={<ChatRoom/>} />
      </Routes>
    </Router>
     )
}

export default App
