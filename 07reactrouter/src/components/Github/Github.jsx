import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
// const [d,setD]=useState([]);
//     useEffect(()=>{

//         fetch("https://api.github.com/users/hiteshchoudhary").then((r)=> r.json()).then((e)=> setD(e))



//     },[])
const d=useLoaderData();






 return(
<div     className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"           >Github followers: {d.followers}


    <img     width={300}    src={d.avatar_url} alt="git picture" />
</div>
    )
}

export default Github; 

export const frt= async () =>{
const r=await  fetch("https://api.github.com/users/hiteshchoudhary");
return r.json();

}