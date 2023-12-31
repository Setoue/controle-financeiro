import React from 'react';
import GlobalStyle from './styles/global';
import RouteApp from './routes';
import { AuthProvider } from './context/auth';

const App = () => {
    return (
        <AuthProvider>
            <RouteApp />
            <GlobalStyle />
        </AuthProvider>
    )
}

export default App;