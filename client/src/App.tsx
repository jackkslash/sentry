import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/chatroom' element={<ChatRoom />} />
      </Routes>
    </>
  )
}

export default App
