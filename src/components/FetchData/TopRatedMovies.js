import { useState,useEffect } from "react";


const FetchTopRatedMovies = (url) => {

 const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
 const [topRatedMovieLoading, setTopRatedMovieLoading] = useState(true);
 const [topRatedMovieError, setTopRatedMovieError] = useState(null);

 useEffect(()=>{
  setTimeout(()=>{
   fetch(url)
   .then(res =>{
    console.log(res,'this is the data response')
    return res.json();
   }).then(data =>{
     console.log(data.results,'this is tmdb data')
    
     setTopRatedMoviesData(data.results)
     setTopRatedMovieLoading(false)
     setTopRatedMovieError(null)
   })
   .catch(err =>{
    console.log(err.message)
    setTopRatedMovieError(err.message)
    setTopRatedMovieLoading(false)
   
   })
  },1000)
   
 },[url])
 return{topRatedMoviesData, topRatedMovieLoading, topRatedMovieError}
}
export default FetchTopRatedMovies