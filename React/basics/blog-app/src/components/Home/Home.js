import React from 'react';
import { BlogList } from '../BlogList/BlogList';
import useFetch from '../../hooks/useFetch';


export default function Home() {

  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className='home'>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading Data</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div>
  )
}
