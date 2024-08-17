import React, {useState, useEffect} from 'react';
import { BlogList } from '../BlogList/BlogList';
import useFetch from '../../hooks/useFetch';


export default function Home() {

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

const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className='home'>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading Data</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div>
  )
}
