import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AddTodo from './componenets/Addtodo.jsx'

createRoot(document.getElementById('root')).render(
  <Provider  stor={store}>
    <AddTodo></AddTodo>
    <todos></todos>
  </Provider>,
)
