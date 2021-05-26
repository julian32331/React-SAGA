import {
    KELOWNA_LOCATION_FETCH_REQUEST,
    KELOWNA_LOCATION_FETCH_REQUEST_SUCCESS,
    KELOWNA_LOCATION_FETCH_REQUEST_FAILURE,
    REVELSTOKE_LOCATION_FETCH_REQUEST,
    REVELSTOKE_LOCATION_FETCH_REQUEST_SUCCESS,
    REVELSTOKE_LOCATION_FETCH_REQUEST_FAILURE,
    VERNON_LOCATION_FETCH_REQUEST,
    VERNON_LOCATION_FETCH_REQUEST_SUCCESS,
    VERNON_LOCATION_FETCH_REQUEST_FAILURE,
} from '../types/mediaTypes';

export default (state, action) => {
    switch(action.type) {
        case KELOWNA_LOCATION_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                kelowna: action.payload
            };
        case KELOWNA_LOCATION_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                kelowna: action.payload
            };
        case REVELSTOKE_LOCATION_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                revelstoke: action.payload
            };
        case REVELSTOKE_LOCATION_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                revelstoke: action.payload
            };
        case VERNON_LOCATION_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                vernon: action.payload
            };
        case VERNON_LOCATION_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                vernon: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}