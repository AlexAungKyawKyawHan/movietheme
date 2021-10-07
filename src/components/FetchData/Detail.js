import { useState,useEffect } from "react";

const FetchDetail = (url) => {

 const [detailData, setDetailData] = useState([]);
 const [detailLoading, setDetailLoading] = useState(true);
 const [detailError, setDetailError] = useState(null);

 useEffect(()=>{
  setTimeout(()=>{
   fetch(url)
   .then(res =>{
    console.log(res,'this is the data response')
    return res.json();
   }).then(data =>{
     console.log(data,'this is get detail tmdb data')
    
     setDetailData(data)
     setDetailLoading(false)
     setDetailError(null)
   })
   .catch(err =>{
    console.log(err.message)
    setDetailError(err.message)
    setDetailLoading(false)
   
   })
  },1000)
   
 },[url])
 return{detailData, detailLoading,detailError}
}
export default FetchDetail;