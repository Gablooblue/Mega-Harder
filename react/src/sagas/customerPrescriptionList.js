import {takeEvery, call, put, select} from "redux-saga/effects";
import {types, actions} from "../actions/customerPrescriptionList";
import {
	fetchPrescriptionsApi
} from "../api/customerApi";


function* fetchPrescriptions() {
	try {
		const response = yield call(fetchPrescriptionsApi, action.customerId);
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
