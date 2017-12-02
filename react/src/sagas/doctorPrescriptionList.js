import {takeEvery, call, put, select} from "redux-saga/effects";
import {types, actions} from "../actions/doctorPrescriptionList";
import {
	fetchPrescriptionsApi
} from "../api/doctorApi";


function* fetchPrescriptions() {
	try {
		const response = yield call(fetchPrescriptionsApi, action.doctorId);
		yield put(actions.fetchPrescriptionsSucceeded(response.data));
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
