import { useState,useEffect } from "react";


const useUpComingMoviesFetch= (url) => {

 const [dataUpComingMovies, setDataUpComingMovies] = useState([]);
 const [UpComingMoviesLoading, setUpComingMoviesLoading] = useState(true);
 const [UpComingMoviesError, setUpComingMoviesError] = useState(null);

 useEffect(()=>{
  setTimeout(()=>{
   fetch(url)
   .then(res =>{
    console.log(res,'this is the data upcoming response')
    return res.json();
   }).then(data =>{
     console.log(data.results,'this is upcoming tmdb data')
    
     setDataUpComingMovies(data.results)
     setUpComingMoviesLoading(false)
     setUpComingMoviesError(null)
   })
   .catch(err =>{
    console.log(err.message)
    setUpComingMoviesError(err.message)
    setUpComingMoviesLoading(false)
   
   })
  },1000)
   
 },[url])
 return{dataUpComingMovies, UpComingMoviesLoading, UpComingMoviesError}
}
export default useUpComingMoviesFetch;