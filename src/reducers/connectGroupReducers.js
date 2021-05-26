import {
    FEATURED_CONNECT_GROUP_FETCH_REQUEST,
    FEATURED_CONNECT_GROUP_FETCH_REQUEST_SUCCESS,
    FEATURED_CONNECT_GROUP_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export default (state, action) => {
    switch(action.type) {
        case FEATURED_CONNECT_GROUP_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                connectGroup: action.payload
            };
        case FEATURED_CONNECT_GROUP_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                connectGroup: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}