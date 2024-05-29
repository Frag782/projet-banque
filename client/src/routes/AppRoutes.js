import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Register } from '../pages/Register';

export const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/register' element={ <Register /> }/>
            <Route path='/home' element={ <Home /> }/>
            <Route path='/' element={ <Navigate to={ user ? '/home' : '/login' } /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}