import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddGame from "./pages/AddGame";
import Consoles from "./pages/Consoles";
import Edit from "./pages/Edit";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LibraryShow from "./pages/LibraryShow";
import QueryShow from "./pages/QueryShow";
import SNES from "./pages/SNES";
import TopRated from "./pages/TopRated";

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
        <Route path="/undefined" element={<ErrorPage />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/snes" element={<SNES />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<LibraryShow />} />
        <Route path="/library/:id/edit" element={<Edit />} />
        <Route path="/:id" element={<QueryShow />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
  );
}