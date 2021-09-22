import { useEffect, useState, useRef } from 'react';

const TOTAL_PAGES = 500;
const InfiniteLoading = (url) => {
 const [loading, setLoading] = useState(true);
 const [allData, setAllData] = useState([]);
 const [pageNum, setPageNum] = useState(1);
 const [lastElement, setLastElement] = useState(null);

 const observer = useRef(
  new IntersectionObserver((entries) => {
   const first = entries[0];
   if (first.isIntersecting) {
    setPageNum((no) => no + 1);
   }
  })
 );

 const callData = () => {
   fetch(url)
   .then(res =>{
    console.log(res)
    return res.json();
   }).then(data => {
     let all = new Set([...allData,...data.results])
     setAllData([...all])
   })
 }
 useEffect(() => {
		if (pageNum <= TOTAL_PAGES) {
			callData();
		}
	}, [pageNum]);

 useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);
 return { allData,  pageNum}

}

export default InfiniteLoading;