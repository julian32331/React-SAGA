import { createAction } from '../utils/action';

import {
    FEATURED_CONNECT_GROUP_FETCH_REQUEST, 
} from '../types/mediaTypes';

export function fetchConnectGroup() {
    return createAction(FEATURED_CONNECT_GROUP_FETCH_REQUEST, {});
}