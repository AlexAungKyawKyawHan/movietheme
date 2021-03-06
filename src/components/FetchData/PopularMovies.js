import { useState, useEffect } from "react";


const FetchPopularMovies = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res, 'this is the data response')
          return res.json();
        }).then(data => {
          console.log(data.results, 'this is tmdb data')
          console.log(data, 'this is tmdb data data')
          setData(data.results)
          console.log(data.results.total_pages, 'this is total page for popularmovie')
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          console.log(err.message)
          setError(err.message)
          setIsLoading(false)

        })
    }, 1000)

  }, [url])
  return { data, isLoading, error }
}
export default FetchPopularMovies