import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      axios.get(url)
      .then(res => {
          setData(res.data);
          setIsLoading(false);
          setError(null); 
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
    },1500);
  },[url]);
    
  // useEffect(() => {
  //   fetch(`http://localhost:8000/blogs`)
  //   .then(res => {
  //     if(!res.ok){
  //       console.log('Get request failed');
  //       throw new Error("Get request failed to json server for blogs");
  //     }
  //     return res.json();
  //   })
  //   .then((json) => {
  //     setTimeout(()=>{
  //       setBlogs(json);
  //       setIsLoading(false);
  //     }, 1000);

  //   })
  // }, []);

  return { data, isLoading, error }
}

export default useFetch;