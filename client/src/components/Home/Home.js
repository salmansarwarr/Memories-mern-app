import {
    Container,
    Grid,
    Grow,
    Paper,
    AppBar,
    TextField,
    Button,
} from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPostBySearch } from '../../actions/posts';
import Paginate from '../Pagination';
import useStyles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostBySearch({ search }));
            navigate(`/posts/search?searchQuery=${search || 'none'}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            searchPost();
        }
    };

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    className={classes.mainContainer}
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppBar
                            className={classes.appBarSearch}
                            position="static"
                            color="inherit"
                        >
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button
                                onClick={searchPost}
                                variant="contained"
                                className={classes.searchButton}
                                color="primary"
                            >
                                Search
                            </Button>
                        </AppBar>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                        {!searchQuery && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Paginate page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
