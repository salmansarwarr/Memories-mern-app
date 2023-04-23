import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column !important',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 28px',
        }
    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fonsSize: '2em',
        fontWeight: 300,
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('md')]: {
            padding: '0px !important',
            justifyContent: 'flex-start'
        }
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '150px',
        }
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
