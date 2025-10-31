import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './componenets/Login'

import Profile from './componenets/Profile'
function App() {
  

  return (
    <>
    <h1>React Context API</h1>
  <UsercontextProvider>
<Login />
<Profile />
  </UsercontextProvider>

    </>
  )
}

export default App
