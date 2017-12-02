export const types = {
	MEDICINES_FETCH_REQUESTED: 'DOCTOR/MEDICINES_FETCH_REQUESTED',
	MEDICINES_FETCH_SUCCEEDED: 'DOCTOR/MEDICINES_FETCH_SUCCEEDED',
	MEDICINES_FETCH_FAILED: 'DOCTOR/MEDICINES_FETCH_FAILED',

	PRESCRIBED_MEDICINES_FETCH_REQUESTED: 'DOCTOR/PRESCRIBED_MEDICINES_FETCH_REQUESTED',
	PRESCRIBED_MEDICINES_FETCH_SUCCEEDED: 'DOCTOR/PRESCRIBED_MEDICINES_FETCH_SUCCEEDED',
	PRESCRIBED_MEDICINES_FETCH_FAILED: 'DOCTOR/PRESCRIBED_MEDICINES_FETCH_FAILED',

  MEDICINE_ADD: 'DOCTOR/MEDICINE_ADD',
  MEDICINE_REMOVE: 'DOCTOR/MEDICINE_REMOVE',
  MEDICINE_QUANTITY_UPDATE: 'DOCTOR/MEDICINE_QUANTITY_UPDATE',

  PRESCRIBED_MEDICINE_QUANTITY_UPDATE: 'DOCTOR/MEDICINE_QUANTITY_UPDATE',

	PRESCRIPTION_ORDER_CREATE_REQUESTED: 'DOCTOR/PRESCRIPTION_ORDER_CREATE_REQUESTED',
	PRESCRIPTION_ORDER_CREATE_SUCCEEDED: 'DOCTOR/PRESCRIPTION_ORDER_CREATE_SUCCEEDED',
	PRESCRIPTION_ORDER_CREATE_FAILED: 'DOCTOR/PRESCRIPTION_ORDER_CREATE_FAILED'
};


export const actions = {
	fetchMedicines: () => ({type: types.MEDICINES_FETCH_REQUESTED}),
	fetchMedicinesSucceeded: (medicines) => ({type: types.MEDICINES_FETCH_SUCCEEDED, medicines}),
	fetchMedicinesFailed: (error) => ({type: types.MEDICINES_FETCH_FAILED, error}),

	fetchPrescribedMedicines: (customerId, prescriptionId) => ({type: types.PRESCRIBED_MEDICINES_FETCH_REQUESTED, customerId, prescriptionId}),
	fetchPrescribedMedicinesSucceeded: (medicines) => ({type: types.PRESCRIBED_MEDICINES_FETCH_SUCCEEDED, medicines}),
	fetchPrescribedMedicinesFailed: (error) => ({type: types.PRESCRIBED_MEDICINES_FETCH_FAILED, error}),

  setCustomer: (customerId) => ({type: types.MEDICINE_ADD, customerId}),

  addMedicine: (medicine) => ({type: types.MEDICINE_ADD, medicine}),
  removeMedicine: (medicineId) => ({type: types.MEDICINE_REMOVE, medicineId}),
  updateMedicineQuatity: (medicineId, quantity) => ({type: types.MEDICINE_QUANTITY_UPDATE, medicineId, quantity}),

  updatePrescribedMedicineQuantity: (medicineId, quantity) => ({type: types.PRESCRIBED_MEDICINE_QUANTITY_UPDATE, medicineId, quantity}),

	createPrescriptionOrder: () => ({type: types.PRESCRIPTION_ORDER_CREATE_REQUESTED}),
	createPrescriptionOrderSucceeded: (medicines) => ({type: types.PRESCRIPTION_ORDER_CREATE_SUCCEEDED, medicines}),
	createPrescriptionOrderFailed: (error) => ({type: types.PRESCRIPTION_ORDER_CREATE_FAILED, error}),
};




