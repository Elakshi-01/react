import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

function App() {
  

  return (
   <h1>react vite</h1>
  )
}


const re={
type : 'a',
props : {
    href: 'https://www.google.com',
    taregt: '_blank'
},
children :'visit google'

};


const x= (
  <a href="https://www.google.com"    taregt="_blank"  >visit</a>
)


const y="as";
// making react element
const ree= React.createElement(

'a',
{href:"https://www.google.com",    taregt:"_blank"   },
'visit google LL',
y

);







createRoot(document.getElementById('root')).render(
//App()
// <App />
// re does not work
// x works
ree

)
