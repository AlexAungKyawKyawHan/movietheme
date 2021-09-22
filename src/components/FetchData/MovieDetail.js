import { useState,useEffect } from "react";

const FetchMovieDetail = (url) => {

 const [dataMovieDetail, setDataMovieDetail] = useState([]);
 const [movieDetailLoading, setMovieDetailLoading] = useState(true);
 const [movieDetailError, setMovieDetailError] = useState(null);

 useEffect(()=>{
  setTimeout(()=>{
   fetch(url)
   .then(res =>{
    console.log(res,'this is the data response')
    return res.json();
   }).then(data =>{
     console.log(data,'this is get detail tmdb data')
    
     setDataMovieDetail(data)
     setMovieDetailLoading(false)
     setMovieDetailError(null)
   })
   .catch(err =>{
    console.log(err.message)
    setMovieDetailError(err.message)
    setMovieDetailLoading(false)
   
   })
  },1000)
   
 },[url])
 return{dataMovieDetail, movieDetailLoading, movieDetailError}
}
export default FetchMovieDetail;