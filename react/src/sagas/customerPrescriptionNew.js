import {takeEvery, call, put, select} from "redux-saga/effects";
import {types, actions} from "../actions/customerPrescriptionNew";
import {getDoctorId, getPrescriptionPayload} from "../reducers/customerPrescriptionNew";
import {
  fetchCustomersApi
} from "../api/customerApi";
import {
  createPrescriptionApi
} from "../api/doctorApi";
import {
  fetchMedicinesApi,
  fetchPrescribedMedicinesApi
} from "../api/medicineApi";


function* fetchPrescribedMedicines() {
  try {
    // const response = yield call(fetchPrescribedMedicinesApi, action.customerId, action.prescriptionId);
    const data = [
      {
        id: 0,
        name: "drug-name",
        prescribedQuantity: 5
      },
      {
        id: 1,
        name: "drug-name-too",
        prescribedQuantity: 4
      },
    ];
    yield put(actions.fetchPrescribedMedicinesSucceeded(data));
  } catch (error) {
    yield put(actions.fetchPrescribedMedicinesFailed(error));
  }
}


function* watchFetchPrescribedMedicines() {
  yield takeEvery(types.PRESCRIBED_MEDICINES_FETCH_REQUESTED, fetchPrescribedMedicines);
}


function* fetchMedicines() {
  try {
    // const response = yield call(fetchMedicinesApi);
    const data = [
      {
        id: 0,
        name: "drug-name",
      },
      {
        id: 1,
        name: "drug-name-too",
      }
    ];
    yield put(actions.fetchMedicinesSucceeded(data));
  } catch (error) {
    yield put(actions.fetchMedicinesFailed(error));
  }
}


function* watchFetchMedicines() {
  yield takeEvery(types.MEDICINES_FETCH_REQUESTED, fetchMedicines);
}


function* createPrescriptionOrder() {
  const customerId = yield select(getCustomerId);
  const payload = yield select(getPrescriptionPayload);
  try {
    const response = yield call(createPrescriptionApi, customerId, action.prescriptionId, payload);
    yield put(actions.createPrescriptionOrderSucceeded(response.data));
  } catch (error) {
    yield put(actions.createPrescriptionOrderFailed(error));
  }
}


function* watchCreatePrescriptionOrder() {
  yield takeEvery(types.PRESCRIPTION_ORDER_CREATE_FAILED, createPrescriptionOrder);
}


export default [
  watchFetchPrescribedMedicines, watchFetchMedicines, watchCreatePrescriptionOrder
];
