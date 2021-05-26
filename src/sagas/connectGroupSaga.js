import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as Api from '../utils/api';
import {
    FEATURED_CONNECT_GROUP_FETCH_REQUEST,
    FEATURED_CONNECT_GROUP_FETCH_REQUEST_SUCCESS,
    FEATURED_CONNECT_GROUP_FETCH_REQUEST_FAILURE
} from '../types/mediaTypes';

export function* fetchConnectGroup(action) {
    try {
       const featured_events = yield call(Api.fetchConnectGroup);
       yield put({type: FEATURED_CONNECT_GROUP_FETCH_REQUEST_SUCCESS, payload: featured_events.data});
    } catch (e) {
       yield put({type: FEATURED_CONNECT_GROUP_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* connectGroupSagas() {
    yield [
        takeEvery(FEATURED_CONNECT_GROUP_FETCH_REQUEST, fetchConnectGroup),
    ];
}