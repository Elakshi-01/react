import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todocontext } from './context/Todocontext'
import { TodocontextProvider } from './context/Todocontext'
import { useTodo } from './context/Todocontext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([]);

  const addtodo = (todo) =>{
    setTodos((p) => [...p,{id:Date.now(),...todo}])

  }

  const updatetodo = (todo,id) => {
    setTodos((p) => (p.map((pa) => (pa.id===id ? todo : pa))))
  };


const deletetodo = (id) => { 

setTodos((p) => (p.filter((pa) => (pa.id!==id))))

 };


 const toggletodo = (id) => {

    setTodos((p) => (p.map((pa) => (pa.id===id ? {...pa,completed: !pa.completed} : pa))))

 };


useEffect(()=> {

  const x= JSON.parse(localStorage.getItem("todo"));

if(x && x.length > 0){
  setTodos(x);
}

},[]);




useEffect(()=> {

  localStorage.setItem("todo",JSON.stringify(todos));

},[todos]);

  return (
    <TodocontextProvider     value={{todos,addtodo,updatetodo,deletetodo,toggletodo}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                 <div className="mb-4">
           {/* Todo form goes here */} 
           <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                   {/*Loop and Add TodoItem here */}
                   {todos.map((todo)=>(
                    <div key={todo.id}  className='w-full'>
                    <TodoItem todo={todo}></TodoItem>
                         </div>
                   ))}
                    </div>
                </div>
            </div>
    </TodocontextProvider>
  )
}

export default App
 