import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddGame from "./pages/AddGame";
import Dreamcast from "./pages/Dreamcast";
import Edit from "./pages/Edit";
import ErrorPage from "./pages/ErrorPage";
import GameBoy from "./pages/GameBoy";
import GameBoyAdvance from "./pages/GameBoyAdvance";
import GameBoyColor from "./pages/GameBoyColor";
import Gamecube from "./pages/Gamecube";
import GameGear from "./pages/GameGear";
import Genesis from "./pages/Genesis";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LibraryShow from "./pages/LibraryShow";
import N64 from "./pages/N64";
import NES from "./pages/NES";
import Nintendo3DS from "./pages/Nintendo3DS";
import NintendoDS from "./pages/NintendoDS";
import Playstation1 from "./pages/Playstation1";
import Playstation2 from "./pages/Playstation2";
import Playstation3 from "./pages/Playstation3";
import Playstation4 from "./pages/Playstation4";
import Playstation5 from "./pages/Playstation5";
import PSP from "./pages/PSP";
import PSVita from "./pages/PSVita";
import QueryShow from "./pages/QueryShow";
import Saturn from "./pages/Saturn";
import SNES from "./pages/SNES";
import Switch from "./pages/Switch";
import TopRated from "./pages/TopRated";
import Wii from "./pages/Wii";
import WiiU from "./pages/WiiU";
import Xbox from "./pages/Xbox";
import Xbox360 from "./pages/Xbox360";
import XboxOne from "./pages/XboxOne";
import XboxSeriesX from "./pages/XboxSeriesX";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> &nbsp; | &nbsp;
        <Link to="/library">My Library</Link> &nbsp; | &nbsp;
        <Link to="/add">Add Game to Library</Link>
      </nav>
      <br/>
      <h1>React Games Library</h1>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/n3ds" element={<Nintendo3DS />} />
        <Route path="/add" element={<AddGame />} />
        <Route path="/dreamcast" element={<Dreamcast />} />
        <Route path="/gameboy" element={<GameBoy />} />
        <Route path="/gba" element={<GameBoyAdvance />} />
        <Route path="/gbc" element={<GameBoyColor />} />
        <Route path="/gamecube" element={<Gamecube />} />
        <Route path="/gamegear" element={<GameGear />} />
        <Route path="/genesis" element={<Genesis />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<LibraryShow />} />
        <Route path="/library/:id/edit" element={<Edit />} />
        <Route path="/n64" element={<N64 />} />
        <Route path="/nes" element={<NES />} />
        <Route path="/nds" element={<NintendoDS />} />
        <Route path="/ps1" element={<Playstation1 />} />
        <Route path="/ps2" element={<Playstation2 />} />
        <Route path="/ps3" element={<Playstation3 />} />
        <Route path="/ps4" element={<Playstation4 />} />
        <Route path="/ps5" element={<Playstation5 />} />
        <Route path="/psp" element={<PSP />} />
        <Route path="/psvita" element={<PSVita />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/snes" element={<SNES />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/undefined" element={<ErrorPage />} />
        <Route path="/wii" element={<Wii />} />
        <Route path="/wiiu" element={<WiiU />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/xbox360" element={<Xbox360 />} />
        <Route path="/xboxone" element={<XboxOne />} />
        <Route path="/xboxseriesx" element={<XboxSeriesX />} />
        <Route path="/:id" element={<QueryShow />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
  );
}