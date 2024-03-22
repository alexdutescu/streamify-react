const initialState = {
    movies:[],
    loading: false,
    error: ''
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_REQUEST":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "QUERY_MOVIES":
            return {
                ...state,
                movies: action.payload,
                loading: false,
                 error: ''
            }
        case "EMPTY_MOVIES":
            return {
                ...state,
                movies: [],
                loading: false,
                error: ''
            }
        case "SET_ERROR":
            return {
                ...state,
                movies: [],
                loading: false,
                error: action.payload
            }
        
        default:
            return state;
    }
}

export default MoviesReducer;