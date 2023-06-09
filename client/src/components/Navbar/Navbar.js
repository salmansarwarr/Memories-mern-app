import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import useStyles from './styles';
import memoriesLogo from '../../images/memories-Logo.png';
import memoriesText from '../../images/memories-Text.png';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import decode from 'jwt-decode';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sm = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('profile'))
    );

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar
            className={classes.appBar}
            style={{ flexDirection: 'row' }}
            position="static"
            color="inherit"
        >
            <Link className={classes.brandContainer} to="/">
                <img src={memoriesText} alt="icon" height={sm ? '45px' : '30px'} />
                <img
                    className={classes.image}
                    src={memoriesLogo}
                    alt="icon"
                    height="40px"
                />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        >
                            {user.result.name.charAt(0)}
                        </Avatar>
                        {sm && (
                            <Typography
                                className={classes.userName}
                                variant="h6"
                            >
                                {user.result.name}
                            </Typography>
                        )}
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="error"
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/auth')}
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
