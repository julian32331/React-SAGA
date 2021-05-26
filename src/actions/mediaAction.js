import { createAction } from '../utils/action';

import {
    PODCASTS_FETCH_REQUEST
} from '../types/mediaTypes';

export const fetchPodcast = () => {
    return createAction(PODCASTS_FETCH_REQUEST, {});
}