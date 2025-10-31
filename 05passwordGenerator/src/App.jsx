import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

const [length,setLength]=useState(8);
const [number,setNumber]=useState(false);
const [char,setChar]=useState(false);
const [pass,setPass]=useState("");

const passgen = useCallback(()=> {
let pass="";
let str="";
str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(number){
  str+="0123456789";
}
if(char){
  str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

for(let i=0;i<length;i++){
  let ind = Math.floor(Math.random()*str.length);
  pass+=str.charAt(ind);


}
setPass(pass);



},[length,number,char,setPass]);

const pr=useRef(null);
useEffect(()=>{
  passgen();
},[length,number,char,passgen])

const cptc =useCallback(()=>{
pr.current?.select();


  window.navigator.clipboard.writeText(pass);
},[pass]);




  return (
      <div className="w-full max-w-md mx-auto my-8 shadow-lg rounded-lg p-8 text-center bg-gray-700">
      <h1 className="my-3 text-white text-center">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          placeholder="Password"
          className="outline-none bg-slate-100 py-1 px-3 w-full text-black"
          readOnly
          ref={pr}
        />
        <button    onClick={cptc}           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
<div className='  text-orange-400    flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input
   type="range" 
   min={6}
   max={100}
   value={length}
   className='cursor:pointer'
   onChange={(e)=>{
    setLength(e.target.value)
   }}
   />
   <label>Length : {length}</label>
</div>
<div className='flex items-center gap-x-1 '>
<input type="checkbox" 
defaultChecked={number}
onChange={()=>{
  setNumber((p)=> !p); 
}}

/>
<label >Numbers</label>

</div>
<div className='flex items-center gap-x-1 '>
<input type="checkbox" 
defaultChecked={char}
onChange={()=>{
  setChar((p)=> !p); 
}}

/>
<label >Characters</label>

</div>
</div>
    </div>
  )
}

export default App
