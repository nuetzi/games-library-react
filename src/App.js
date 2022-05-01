import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AddGame from "./pages/AddGame";
import Show from "./pages/Show";
//import Edit from "./pages/Edit";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> &nbsp; | &nbsp;
        <Link to="/library">Library</Link> &nbsp; | &nbsp;
        <Link to="/add">Add Game</Link>
      </nav>
      <br/>
      <h1>React Games Library</h1>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddGame />} />
        <Route path="/library" element={<Library />} />
        <Route path="/:id" element={<Show />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
  );
}