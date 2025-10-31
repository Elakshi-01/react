import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UsecontextProvider } from './context/Usetheme'
import { Usecontext } from './context/Usetheme'
import Usetheme from './context/Usetheme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'


function App() {
  const [theme,setTheme]=useState("light");


const lightt = () => {
  setTheme("light");

}


const  darkt = () => {
  setTheme("dark");

}

useEffect(()=>{

document.querySelector("html").classList.remove("light","dark");
document.querySelector("html").classList.add(theme)


},[theme])


  return (
    <UsecontextProvider  value={{lightt,darkt,theme}}>

<div className="flex flex-wrap min-h-screen items-center">
     <div className="w-full">
     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
      <ThemeBtn></ThemeBtn>
                        
  </div>

    <div className="w-full max-w-sm mx-auto">
                  <Card></Card>     
  </div>
 </div>
  </div>

    </UsecontextProvider>
  )
}

export default App
