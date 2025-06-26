import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Login from './component/Login'
import Signup from './component/Signup'
const App = () => {
  return (
    
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
  
    
      
    
    </div>
  )
}

export default App