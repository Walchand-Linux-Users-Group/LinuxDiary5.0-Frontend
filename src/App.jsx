import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/Register'
const App = () => {
  return (
    <div className="gradient-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
