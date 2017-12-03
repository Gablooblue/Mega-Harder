import {takeEvery, call, put, select} from "redux-saga/effects";
import {types, actions} from "../actions/doctorPrescriptionNew";
import {getDoctorId, getPrescriptionPayload} from "../reducers/doctorPrescriptionNew";
import {
	fetchCustomersApi
} from "../api/customerApi";
import {
	createPrescriptionApi
} from "../api/doctorApi";
import {
	fetchMedicinesApi
} from "../api/medicineApi";


function* fetchCustomers() {
	try {
		const response = yield call(fetchCustomersApi);
		yield put(actions.fetchCustomersSucceeded(response.data));
	} catch (error) {
		yield put(actions.fetchCustomersFailed(error));
	}
}


function* watchFetchCustomers() {
	yield takeEvery(types.CUSTOMERS_FETCH_REQUESTED, fetchCustomers);
}


function* fetchMedicines() {
	try {
		const response = yield call(fetchMedicinesApi);
		yield put(actions.fetchMedicinesSucceeded(response.data));
	} catch (error) {
		yield put(actions.fetchMedicinesFailed(error));
	}
}


function* watchFetchMedicines() {
	yield takeEvery(types.MEDICINES_FETCH_REQUESTED, fetchMedicines);
}


function* createPrescription() {
  const doctorId = yield select(getDoctorId);
  const payload = yield select(getPrescriptionPayload);
	try {
		const response = yield call(createPrescriptionApi, doctorId, payload);
		yield put(actions.createPrescriptionSucceeded(response.data));
	} catch (error) {
		yield put(actions.createPrescriptionFailed(error));
	}
}


function* watchCreatePrescription() {
	yield takeEvery(types.PRESCRIPTION_CREATE_REQUESTED, createPrescription);
}



export default [
	watchFetchCustomers, watchFetchMedicines, watchCreatePrescription
];
