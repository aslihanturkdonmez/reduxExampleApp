import {all} from 'redux-saga/effects';
import {watchGetUsers} from './UsersSaga';

export default function* rootSaga() {
  yield all([watchGetUsers()]);
}
