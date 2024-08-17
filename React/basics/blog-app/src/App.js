import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewBlogForm from './components/NewBlogForm/NewBlogForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addNewBlog" element={<NewBlogForm />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
