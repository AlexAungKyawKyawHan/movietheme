import { useState, useEffect } from "react";


const FetchOnAirTVShows = (url) => {

  const [onAirTVShowsData, setonAirTVShowsData] = useState([]);
  const [onAirTVShowsLoading, setonAirTVShowsLoading] = useState(true);
  const [onAirTVShowsError, setonAirTVShowsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res, 'this is the data response')
          return res.json();
        }).then(data => {
          console.log(data.results, 'this is tmdb data')

          setonAirTVShowsData(data.results)
          setonAirTVShowsLoading(false)
          setonAirTVShowsError(null)
        })
        .catch(err => {
          console.log(err.message)
          setonAirTVShowsError(err.message)
          setonAirTVShowsLoading(false)

        })
    }, 1000)

  }, [url])
  return { onAirTVShowsData, onAirTVShowsLoading, onAirTVShowsError }
}
export default FetchOnAirTVShows