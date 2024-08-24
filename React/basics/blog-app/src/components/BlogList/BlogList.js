import React from 'react'
import "./BlogList.css";
import { Link } from 'react-router-dom';

export const BlogList = ({blogs, title}) => {
    
  return <>
    <h2 >{title}</h2>
    {
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to = {`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
  </>
}
