import { useState ,useEffect} from 'react'

function useCurrency(c){
    const [data,setData]=useState({});
useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((r)=> r.json()).then((e)=> setData(e[c]))
},[c])
return data;
}

export default useCurrency;