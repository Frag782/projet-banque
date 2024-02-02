import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Login />
    /*
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Navigate to='login' />} />
      </Routes>
    </BrowserRouter>
  */
  );
}

export default App;
