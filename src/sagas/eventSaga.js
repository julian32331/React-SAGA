import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as Api from '../utils/api';
import {
    FEATURED_EVENTS_FETCH_REQUEST,
    FEATURED_EVENTS_FETCH_REQUEST_SUCCESS,
    FEATURED_EVENTS_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export function* fetchFeaturedEvents(action) {
    try {
       const featured_events = yield call(Api.fetchFeaturedEvents);
       yield put({type: FEATURED_EVENTS_FETCH_REQUEST_SUCCESS, payload: featured_events.data});
    } catch (e) {
       yield put({type: FEATURED_EVENTS_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* eventSagas() {
    yield [
        takeEvery(FEATURED_EVENTS_FETCH_REQUEST, fetchFeaturedEvents),
    ];
}