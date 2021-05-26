import { createAction } from '../utils/action';

import {
    HOMEDATA_FETCH_REQUEST
} from '../types/mediaTypes';

export const fetchHomeData = () => {
    return createAction(HOMEDATA_FETCH_REQUEST, {});
}

export const sendSomeApiRequest = (value) => {
    return createAction('SEND_SOME_REQUEST', value);
}