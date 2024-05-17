import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { ChatRoom } from './Components/ChatRoom'
import RouteGuard from './Components/Auth/RouteGuard'

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat_room" element={
        <RouteGuard>
          <ChatRoom />
        </RouteGuard>
        } 
      />
      </Routes>
    </Router>
  )
}

export default App
