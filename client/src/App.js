import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Login from './pages/Login';
import Notfound from './pages/NotFound/Notfound';
import Register from './pages/Register';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/home' element={ <Home /> }/>
        <Route path='/' element={ <Navigate to={ sessionStorage.getItem('authenticatedUser') ? '/home' : '/login' } /> } />
        <Route path='*' element={ <Notfound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
