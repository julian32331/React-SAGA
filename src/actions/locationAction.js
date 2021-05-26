import { createAction } from '../utils/action';

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

export function fetchKelownaLocation() {
    return createAction(KELOWNA_LOCATION_FETCH_REQUEST, {});
}

export function fetchRevelstokeLocation() {
    return createAction(REVELSTOKE_LOCATION_FETCH_REQUEST, {});
}

export function fetchVernonLocation() {
    return createAction(VERNON_LOCATION_FETCH_REQUEST, {});
}
