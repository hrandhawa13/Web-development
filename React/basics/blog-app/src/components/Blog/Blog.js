import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import "./Blog.css"

export default function Blog() {
  const { id } = useParams();
  const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
        await axios.delete(`http://localhost:8000/blogs/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error:', error);
      }
  }

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading data.....</div>}
      {error && <div>{error}</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
        )}
    </div>
  )
}
