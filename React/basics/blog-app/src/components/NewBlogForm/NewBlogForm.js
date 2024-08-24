import React, { useState } from 'react'
import './NewBlogForm.css'
export default function NewBlogForm() {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>

        <button>Add Blog!!!</button>
      </form>
    </div>
  )
}
