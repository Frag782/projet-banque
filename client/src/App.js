import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Login from './pages/Login';
import Notfound from './pages/NotFound.js/Notfound';
import Register from './pages/Register';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home/:username' element={<Home />}/>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
