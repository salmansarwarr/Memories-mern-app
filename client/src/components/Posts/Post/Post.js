import useStyles from './style';
import {
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltIconOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);

    const userId = user?.result?.googleId || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleClick = async () => {
        dispatch(likePost(post._id));
        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId) ? (
                <>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;
                    {likes.length > 2
                        ? `You and ${likes.length - 1} others`
                        : `${likes.length} Like${likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <ThumbUpAltIconOutlined fontSize="small" />
                    &nbsp;
                    {`${likes.length} Like${likes.length > 1 ? 's' : ''}`}
                </>
            );
        }

        return (
            <>
                <ThumbUpAltIconOutlined fontSize="small" />
                &nbsp;Like
            </>
        );
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <Link to={`/posts/${post._id}`}>
                <CardMedia
                    className={classes.media}
                    image={
                        post.selectedFile ||
                        'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                    }
                />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                {(user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2}>
                        <Button
                            style={{ color: 'white' }}
                            size="small"
                            onClick={() => {
                                setCurrentId(post._id);
                            }}
                        >
                            <MoreHorizIcon fontSize="default" />
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {post.message}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleClick}
                    disabled={!user?.result}
                >
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="error"
                        onClick={() => {
                            dispatch(deletePost(post._id));
                        }}
                    >
                        <DeleteIcon fontSize="small" sx={{ color: 'red' }} />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;
