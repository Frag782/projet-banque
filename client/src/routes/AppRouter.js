import { AuthProvider } from '../providers/AuthProvider';
import { AppRoutes } from './AppRoutes';
const { BrowserRouter } = require('react-router-dom');

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}