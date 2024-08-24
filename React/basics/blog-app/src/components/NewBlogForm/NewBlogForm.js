import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBlogForm.css'
import axios from 'axios';

export default function NewBlogForm() {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();
    const postData = { title, body, author}
    try {
      const res = await axios.post('http://localhost:8000/blogs', postData);
      setIsPending(false);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
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

        {!isPending && <button>Add Blog!!!</button>}
        {isPending && <button disabled>Adding Blog!!!</button>}
      </form>
    </div>
  )
}
