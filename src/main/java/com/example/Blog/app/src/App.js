import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-post">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-post" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
