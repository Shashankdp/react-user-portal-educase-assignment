import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './Components/SignupPage'
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/LoginPage'
import Profile from './Components/Profile'

function App() {

  const users = [];


  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/profile' element={<Profile />}></Route>

    </Routes>
  )
}

export default App