import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from 'gapi-script';
import PostDetails from './components/PostDetails/PostDetails';
import { useEffect, useState } from 'react';

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    gapi.load('client:auth2', () => {
        gapi.client.init({
            clientId:
                '200846824042-c67toqtue87jnqnari1jsvfuf30qpqcs.apps.googleusercontent.com',
            plugin_name: 'chat',
        });
    });

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [localStorage])

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Navigate to="/posts" />} />
                    <Route path="/posts" exact Component={Home} />
                    <Route path="/posts/search" exact Component={Home} />
                    <Route path="/posts/:id" exact Component={PostDetails} />
                    <Route
                        path="/auth"
                        exact
                        element={!user ? <Auth /> : <Navigate to="/posts" />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
