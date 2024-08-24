import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import "./Blog.css"

export default function Blog() {
  const blogsUrl = process.env.REACT_APP_BLOGS_BASE_URL;

  const { id } = useParams();
  const {data: blog, isLoading, error} = useFetch(`${blogsUrl}/${id}`);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
        await axios.delete(`${blogsUrl}/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error:', error);
      }
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`, { state: { editBlog: blog } });
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
          <button className="button-spacing" onClick={handleEdit}>Edit Blog</button>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
        )}
    </div>
  )
}
