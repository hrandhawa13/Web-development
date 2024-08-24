import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewBlogForm from './components/NewBlogForm/NewBlogForm';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addNewBlog" element={<NewBlogForm />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/edit/:id" element={<NewBlogForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
