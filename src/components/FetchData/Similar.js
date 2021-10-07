import { useState, useEffect } from "react";


const Similar = (url) => {

  const [similarData, setSimilarData] = useState([]);
  const [similarLoading, setsimilarLoading] = useState(true);
  const [similarError, setSimilarError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res, 'this is the data response')
          return res.json();
        }).then(data => {
          console.log(data.results, 'this is similarmoive')
          setSimilarData(data.results)
          console.log(data.results.total_pages, 'this is total page for similarmovie')
          setsimilarLoading(false)
          setSimilarError(null)
        })
        .catch(err => {
          console.log(err.message)
          setSimilarError(err.message)
          setsimilarLoading(false)

        })
    }, 1000)

  }, [url])
  return { similarData, similarLoading, similarError}
}
export default Similar