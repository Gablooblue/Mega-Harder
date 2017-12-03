import {takeEvery, call, put, select} from "redux-saga/effects";
import {types, actions} from "../actions/customerPrescriptionList";
import {
  fetchPrescriptionsApi
} from "../api/customerApi";


function* fetchPrescriptions() {
  try {
    // const response = yield call(fetchPrescriptionsApi, action.customerId);
    const data = [
      {
        id: 0,
        details: "something"
      },
      {
        id: 1,
        details: "somewhere"
      }
    ];
    yield put(actions.fetchPrescriptionsSucceeded(data));
  } catch (error) {
    yield put(actions.fetchPrescriptionsFailed(error));
  }
}


function* watchFetchPrescriptions() {
  yield takeEvery(types.PRESCRIPTIONS_FETCH_REQUESTED, fetchPrescriptions);
}


export default [
  watchFetchPrescriptions
];
