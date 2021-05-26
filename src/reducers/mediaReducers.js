import {
    PODCASTS_FETCH_REQUEST,
    PODCASTS_FETCH_REQUEST_SUCCESS,
    PODCASTS_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export default (state, action) => {
    switch(action.type) {
        case PODCASTS_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                podcasts: action.payload
            };
        case PODCASTS_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                podcasts: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}