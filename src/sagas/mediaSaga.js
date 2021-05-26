import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as Api from '../utils/api';
import {
    PODCASTS_FETCH_REQUEST,
    PODCASTS_FETCH_REQUEST_SUCCESS,
    PODCASTS_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export function* fetchPodcasts(action) {
    try {
       const podcasts = yield call(Api.fetchPodcasts);
       yield put({type: PODCASTS_FETCH_REQUEST_SUCCESS, payload: podcasts.data});
    } catch (e) {
       yield put({type: PODCASTS_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* podcastSagas() {
    yield [
        takeEvery(PODCASTS_FETCH_REQUEST, fetchPodcasts),
    ];
}