import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home.jsx'
import { ChatRoom } from './Components/ChatRoom.jsx'
import RouteGuard from './Components/Auth/RouteGuard.jsx'
import { AddUserType } from './Components/User/AddUserType.jsx'

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat_room" element={<RouteGuard> <ChatRoom /> </RouteGuard>} />
        <Route path='/add_user_type' element={<RouteGuard> <AddUserType /> </RouteGuard>} />
      </Routes>
    </Router>
  )
}

export default App
