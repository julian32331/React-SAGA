import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { podcastSagas } from './mediaSaga';
import { locationSagas } from './locationSaga';
import { eventSagas } from './eventSaga';
import { connectGroupSagas } from './connectGroupSaga';
import { homeSagas } from './homeSaga';

export default function* rootSaga() {
    yield all([
      podcastSagas(),
      locationSagas(),
      eventSagas(),
      connectGroupSagas(),
      homeSagas()
    ])
}