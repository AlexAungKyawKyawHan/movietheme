import { useState,useEffect } from "react";


const useFetch = (url) => {

 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(()=>{
  setTimeout(()=>{
   fetch(url)
   .then(res =>{
    console.log(res,'this is the data response')
    return res.json();
   }).then(data =>{
     console.log(data.results,'this is tmdb data')
    
    setData(data.results)
    setIsLoading(false)
    setError(null)
   })
   .catch(err =>{
    console.log(err.message)
     setError(err.message)
     setIsLoading(false)
   
   })
  },1000)
   
 },[url])
 return{data, isLoading, error}
}
export default useFetch