import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setError(null);
        axios.get(url)
        .then(res => {
          setTimeout(()=>{
            console.log(res.data);
            setData(res.data);
            setIsLoading(false);
            setError(null);
          },1500)
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
      },[url]);

      return { data, isLoading, error }
}

export default useFetch;