import { useState, useEffect } from "react";


const FetchTopRatedTVShows = (url) => {

  const [topRatedTVShowsData, setTopRatedTVShowsData] = useState([]);
  const [topRatedTVShowsLoading, setTopRatedTVShowsLoading] = useState(true);
  const [topRatedTVShowsError, setTopRatedTVShowsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res, 'this is the data response')
          return res.json();
        }).then(data => {
          console.log(data.results, 'this is tmdb data')

          setTopRatedTVShowsData(data.results)
          setTopRatedTVShowsLoading(false)
          setTopRatedTVShowsError(null)
        })
        .catch(err => {
          console.log(err.message)
          setTopRatedTVShowsError(err.message)
          setTopRatedTVShowsLoading(false)

        })
    }, 1000)

  }, [url])
  return { topRatedTVShowsData, topRatedTVShowsLoading, topRatedTVShowsError }
}
export default FetchTopRatedTVShows