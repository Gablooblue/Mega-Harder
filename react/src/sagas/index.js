import doctorPrescriptionListSagas from './doctorPrescriptionList';
import doctorPrescriptionNewSagas from './doctorPrescriptionNew';
import customerPrescriptionListSagas from './customerPrescriptionList';
import customerPrescriptionNewSagas from './customerPrescriptionNew';
import {fork} from 'redux-saga/effects';

const combinedSagas = [
	...doctorPrescriptionListSagas,
	...doctorPrescriptionNewSagas,
	...customerPrescriptionListSagas,
	...customerPrescriptionNewSagas
];


export function* sagas() {
  yield combinedSagas.map(saga => fork(saga));
}
