import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componenets/Addtodo'
import Todos from './componenets/Todos'
import {store} from './app/store'

import { Provider } from 'react-redux'
function App() {

  return (
    <>
<h1>REDUX TOOLKIT</h1>
<AddTodo ></AddTodo>
<Todos></Todos>
    </>
  )
}

export default App
