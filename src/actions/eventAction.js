import { createAction } from '../utils/action';

import {
    FEATURED_EVENTS_FETCH_REQUEST, 
    FEATURED_EVENTS_FETCH_REQUEST_SUCCESS,
    FEATURED_EVENTS_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export function fetchFeaturedEvents() {
    return createAction(FEATURED_EVENTS_FETCH_REQUEST, {});
}

