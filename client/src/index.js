import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import './index.css';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
);
