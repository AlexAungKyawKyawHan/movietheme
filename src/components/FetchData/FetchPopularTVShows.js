import { useState, useEffect } from "react";


const FetchPopularTVShows = (url) => {

  const [popularTVShowsData, setPopularTVShowsData] = useState([]);
  const [popularTVShowsLoading, setPopularTVShowsLoading] = useState(true);
  const [popularTVShowsError, setPopularTVShowsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res, 'this is the data response')
          return res.json();
        }).then(data => {
          console.log(data.results, 'this is tmdb data')

          setPopularTVShowsData(data.results)
          setPopularTVShowsLoading(false)
          setPopularTVShowsError(null)
        })
        .catch(err => {
          console.log(err.message)
          setPopularTVShowsError(err.message)
          setPopularTVShowsLoading(false)

        })
    }, 1000)

  }, [url])
  return { popularTVShowsData, popularTVShowsLoading, popularTVShowsError }
}
export default FetchPopularTVShows