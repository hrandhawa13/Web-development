import React, { useState } from 'react'
import "./BlogList.css";

export const BlogList = ({blogs, title}) => {
    
  return <>
    <h2>{title}</h2>
    {
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
  </>
}
