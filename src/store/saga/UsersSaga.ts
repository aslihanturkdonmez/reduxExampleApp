import {put, call, takeEvery, ForkEffect} from 'redux-saga/effects';
import {fetchUsers} from '../../services/User';
import {setLoading, setUsers} from '../slices/UserSlice';
import actions from './actions';

interface ResponseGenerator {
  data: ResponseData;
  status?: number;
}

interface ResponseData {
  results?: any;
}

function* getUsers({payload: {results}}: any) {
  yield put(setLoading(true));

  const res: ResponseGenerator = yield call(() => fetchUsers(results));
  console.log("res",res);
  if (res.status === 200) {
    const data = {
      Data: res.data.results,
      TotalUser: results,
    };
    yield put(setUsers(data));
  }
}

function* watchGetUsers(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(actions.GET_USERS, getUsers);
}

export {watchGetUsers};
