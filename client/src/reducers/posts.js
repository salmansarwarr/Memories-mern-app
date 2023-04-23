import {
    FETCH_ALL,
    UPDATE,
    DELETE,
    CREATE,
    FETCH_BY_SEARCH,
    START_LOADING,
    END_LOADING,
    FETCH_POST,
    COMMENT,
} from '../constants/actionTypes';

const reducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };

        case END_LOADING:
            return { ...state, isLoading: false };

        case FETCH_POST:
            return { ...state, post: action.payload };
            
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post._id === action.payload._id) {
                        return action.payload;
                    }

                    return post;
                })
            }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPage: action.payload.numberOfPages,
            };

        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload,
            };

        case CREATE:
            return { ...state, post: action.payload, posts: state.posts.push(action.payload) };

        case UPDATE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            };

        case DELETE:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default reducer;