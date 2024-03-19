const initialState = {
    movies: []
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "QUERY_MOVIES":
            return {
                ...state,
                movies: action.payload
            }
            case "EMPTY_MOVIES":
                return {
                    ...state,
                    movies: []
                }
        default:
            return state;
    }
}

export default MoviesReducer;