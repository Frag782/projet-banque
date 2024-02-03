import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Notfound from './components/Notfound';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
