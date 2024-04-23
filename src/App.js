import { Routes, Route, Link } from "react-router-dom";
import Kilatok from "./pages/Kilatok";
import Kepek from "./pages/Kepek";
import Home from './pages/Home';

function App() {

  return (
    <div>

      <header>
        <h1 className="text-center mt-3">Balatoni Kilátók</h1>
      </header>

      <nav className="nav bg-dark justify-content-center mb-3">
        <Link className='nav-link link-light' to='/'>Kezdőlap</Link>
        <Link className='nav-link link-light' to='/kilatok'>Kilátók</Link>
        <Link className='nav-link link-light' to='/kepek'>Képek</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/kilatok" element={<Kilatok />} />
        <Route path="/kepek" element={<Kepek />} />
      </Routes>

      <footer className="bg-secondary text-light">
        <p className="text-center">Készítette: Juhász Péter</p>
      </footer>
    </div>

  );
}

export default App;