import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'
import { Header,Footer,Home,Contact,About,User,Github } from './components/index.js'
import { frt } from './components/Github/Github.jsx'



// const router =createBrowserRouter([

// {
//   path:"/",
//   element : <Layout />,
//   children: [
// {path:"",
//   element : <Home />

// },
// {path:"bout",
//   element : <About />

// },
// {path:"contact",
//   element : <Contact />

// }

//   ]
// }

// ])


const router=createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element ={ <Layout />} >
<Route path="" element ={ <Home />} ></Route>
<Route path="about" element ={ <About />} ></Route>
<Route path="contact" element ={ <Contact />} ></Route>
<Route path="user/:id" element ={ <User />} ></Route>
<Route  loader={frt}           path="github" element ={ <Github />} ></Route>

</Route>

  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
