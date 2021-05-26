import {
    FEATURED_EVENTS_FETCH_REQUEST,
    FEATURED_EVENTS_FETCH_REQUEST_SUCCESS,
    FEATURED_EVENTS_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export default (state, action) => {
    switch(action.type) {
        case FEATURED_EVENTS_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                featured: action.payload
            };
        case FEATURED_EVENTS_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                featured: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}