import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn';
import LogIn from './pages/log-in/LogIn';
import Games from './pages/games/Games';
import Rank from './pages/rank/Rank';
import Library from './pages/library/Library';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/games" element={<Games />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
