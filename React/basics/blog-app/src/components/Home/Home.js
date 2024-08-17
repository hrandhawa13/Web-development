import React, {useState, useEffect} from 'react';
import { BlogList } from '../BlogList/BlogList';
import axios from 'axios';


export default function Home() {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(()=>{
    setError(null);
    axios.get('http://localhost:8000/blogs')
    .then(res => {
      setTimeout(()=>{
        console.log(res.data);
        setBlogs(res.data);
        setIsLoading(false);
        setError(null);
      },1500)
    })
    .catch(err => {
      setError(err.message);
      setIsLoading(false);
    });
  },[]);


  return (
    <div className='home'>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading Data</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div>
  )
}
