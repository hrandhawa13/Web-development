import React, {useState, useEffect} from 'react';
import { BlogList } from '../BlogList/BlogList';
import axios from 'axios';


export default function Home() {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    axios.get('http://localhost:8000/blogs')
    .then(res => {
      setTimeout(()=>{
        setBlogs(res.data);
        setIsLoading(false);
      },1500)
    })
    .catch(err => console.error(err));
  },[]);


  return (
    <div className='home'>
      {isLoading && <h2>Loading Data</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div>
  )
}
