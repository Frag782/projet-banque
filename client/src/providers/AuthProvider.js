import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { API } = require('../data/config.json');

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect( () => {
        fetch(API + '/auth/status', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            credentials: 'include'
        })
            .then( (response) => {
                if (response.ok) return response.json();
                else throw new Error('Non authentifié');
            })
            .then( (user) => setUser(user) )
            .catch( () => setUser(null) )
    }, [])

    const register = (username, password) => {
        fetch(API + '/register', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then( (response) => console.log(response))
            // @TODO: redirect on success
            .catch( (error) => { console.log('Erreur lors de la création du compte.') })
    }

    const login = (username, password) => {
        fetch(API + '/login', {
            method : 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify({
                username : username,
                password : password
            })
        })
            .then( (response) => response.json() )
            .then ( (user) => {
                if (user) {
                    setUser(user);
                    navigate('/home', { replace: true });
                }
            })
            .catch ( (error) => console.log('Erreur lors de l\'authentification: ' + error) )
    }
    
    const logout = () => { 
        fetch(API + '/logout', {
            method : 'POST',
            credentials: 'include',
        })
            .then( () => { setUser(null) } )
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}