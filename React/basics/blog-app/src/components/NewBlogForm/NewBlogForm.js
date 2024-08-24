import React, { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NewBlogForm.css'
import axios from 'axios';

export default function NewBlogForm() {
  const location = useLocation();
  const editBlog = location.state?.editBlog;
  const [title, setTitle] = useState(editBlog?.title || '');
  const [body, setBody] = useState(editBlog?.body || '');
  const [author, setAuthor] = useState(editBlog?.author || 'Mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const blogsUrl = process.env.BLOGS_BASE_URL;

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title || '');
      setBody(editBlog.body || '');
      setAuthor(editBlog.author || 'Mario');
    } else {
      // Clear form if not in edit mode
      setTitle('');
      setBody('');
      setAuthor('Mario');
    }
  }, [editBlog]);

  const handleSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();
    const blogData = { title, body, author};
    try {
      if(editBlog?.id){
        await axios.put(`${blogsUrl}/${editBlog.id}`, blogData);
      }else{
        await axios.post(`${blogsUrl}`, blogData);
      }
      
      setIsPending(false);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create">
      <h2>{editBlog?.id ? 'Edit Blog' : 'Add a New Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} />

        <label>Blog body:</label>
        <textarea cols="50" rows="10"
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

        {!isPending && <button>{editBlog?.id ? 'Update Blog' : 'Add Blog'}</button>}
        {isPending && <button disabled>Adding Blog!!!</button>}
      </form>
    </div>
  )
}
