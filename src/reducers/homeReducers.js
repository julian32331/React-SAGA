import {
    HOMEDATA_FETCH_REQUEST,
    HOMEDATA_FETCH_REQUEST_SUCCESS,
    HOMEDATA_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export default (state, action) => {
    switch(action.type) {
        case HOMEDATA_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                homedata: action.payload
            };
        case HOMEDATA_FETCH_REQUEST_FAILURE:
            return {
                ...state,
                homedata: action.payload
            };
        case 'SEND_SOME_REQUEST':
            return {
                ...state,
                someVal: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}