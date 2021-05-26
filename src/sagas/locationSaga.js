import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as Api from '../utils/api';
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

export function* fetchKelownaLocation(action) {
    try {
       const location = yield call(Api.fetchLocation, 'kelowna');
       yield put({type: KELOWNA_LOCATION_FETCH_REQUEST_SUCCESS, payload: location.data});
    } catch (e) {
       yield put({type: KELOWNA_LOCATION_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* fetchRevelstokeLocation(action) {
    try {
       const location = yield call(Api.fetchLocation, 'revelstoke');
       yield put({type: REVELSTOKE_LOCATION_FETCH_REQUEST_SUCCESS, payload: location.data});
    } catch (e) {
       yield put({type: REVELSTOKE_LOCATION_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* fetchVernonLocation(action) {
    try {
       const location = yield call(Api.fetchLocation, 'vernon');
       yield put({type: VERNON_LOCATION_FETCH_REQUEST_SUCCESS, payload: location.data});
    } catch (e) {
       yield put({type: VERNON_LOCATION_FETCH_REQUEST_FAILURE, payload: e.message});
    }
}

export function* locationSagas() {
    yield [
        takeEvery(KELOWNA_LOCATION_FETCH_REQUEST, fetchKelownaLocation),
        takeEvery(REVELSTOKE_LOCATION_FETCH_REQUEST, fetchRevelstokeLocation),
        takeEvery(VERNON_LOCATION_FETCH_REQUEST, fetchVernonLocation),
    ];
}