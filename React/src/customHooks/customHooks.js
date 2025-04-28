import {useEffect, useState} from 'react'
export const useCounter=(initialvalue=0)=>{
const [count,setCount]=useState();
const inc=()=>setCount(s=>s+1)
const dec=()=>setCount(s=>s-1)
return {count,inc,dec}
}

export const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
fetch(url)
.then((res)=>res.json)
.then(data=>{
    setData(data)
    setLoading(false)
})
.catch(e=>{
    setError(e);
    setLoading(false)})
    },[url])

    return {data,error,loading}
}

export const useTheme=()=>{
    const [theme,setTheme]=useState('light')
    const toggle=()=>{
        setTheme(s=>s==='light'?'dark':'light')
    }
    return{theme,toggle}
}