import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>HR Blog App</h1>
        <div className="links">
          <Link to = "/">Home</Link>
          <Link to = "/addNewBlog">New Blog</Link>
        </div>
    </nav>
  )
}
