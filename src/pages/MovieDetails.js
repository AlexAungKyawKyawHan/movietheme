import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const MovieDetails = () => {
 const {id} = useParams()
 const {data:movie, error, isLoading} = useFetch(`http://www.omdbapi.com/?s=star war&apikey=${id}`)

 return(
  <div>
   {isLoading && <div>Loading..</div>}
   {error && <div>{error}</div>}
   {movie && (
    <article>
     <h2>{movie.Title}</h2>
     <p>{movie.Type}</p>
     <p>{movie.Year}</p>
    </article>
   )}
  </div>

 )
}
export default MovieDetails;