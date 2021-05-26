import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as Api from '../utils/api';
import {
    HOMEDATA_FETCH_REQUEST,
    HOMEDATA_FETCH_REQUEST_SUCCESS,
    HOMEDATA_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export function* fetchHomeData(action) {
    try {
       const featured_events = yield call(Api.fetchHomeData);
       yield put({type: HOMEDATA_FETCH_REQUEST_SUCCESS, payload: featured_events.data});
    } catch (e) {
       yield put({type: HOMEDATA_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* homeSagas() {
    yield [
        takeEvery(HOMEDATA_FETCH_REQUEST, fetchHomeData),
    ];
}