import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        gap: '12px',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
    },
    [theme.breakpoints.down('xs')]: {
        mainContainer: {
            flexDirection: 'column-reverse !important',
        },
    },
}));
