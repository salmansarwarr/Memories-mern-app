import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainPaper: {
        padding: '20px',
        borderRadius: '15px',
    },
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '225px',
        },
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        minWidth: '650px',
        borderRadius: '20px',
        margin: '10px',
        flex: `${1} !important`,
    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
    },
    commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    commentsInnerContainer: {
        minWidth: '300px',
        height: '200px',
        overflow: 'auto',
        marginRight: '30px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '0px',
            maxWidth: '200px'
        }
    },
}));
