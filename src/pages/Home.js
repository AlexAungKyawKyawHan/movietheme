import StarWarMovies from "../components/StarWarMovies";
import useFetch from "../components/useFetch";

const Home = ()=>{
 const {data: movies, isLoading, error} = useFetch('http://www.omdbapi.com/?s=superman&apikey=34893b65')
 
 return(
  <div className="home">
   {error &&<div className="error">
    {error}
   </div>}
   {isLoading &&<div className="is-loading">
     ...isLoading
   </div>}
   {movies && <StarWarMovies movies={movies} />}
  </div>
 )
}
export default Home;