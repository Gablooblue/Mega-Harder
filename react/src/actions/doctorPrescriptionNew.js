export const types = {
	CUSTOMERS_FETCH_REQUESTED: 'DOCTOR/CUSTOMERS_FETCH_REQUESTED',
	CUSTOMERS_FETCH_SUCCEEDED: 'DOCTOR/CUSTOMERS_FETCH_SUCCEEDED',
	CUSTOMERS_FETCH_FAILED: 'DOCTOR/CUSTOMERS_FETCH_FAILED',

	MEDICINES_FETCH_REQUESTED: 'DOCTOR/MEDICINES_FETCH_REQUESTED',
	MEDICINES_FETCH_SUCCEEDED: 'DOCTOR/MEDICINES_FETCH_SUCCEEDED',
	MEDICINES_FETCH_FAILED: 'DOCTOR/MEDICINES_FETCH_FAILED',

  CUSTOMER_SET: 'DOCTOR/CUSTOMER_SET',

  MEDICINE_ADD: 'DOCTOR/MEDICINE_ADD',
  MEDICINE_REMOVE: 'DOCTOR/MEDICINE_REMOVE',
  MEDICINE_QUANTITY_UPDATE: 'DOCTOR/MEDICINE_QUANTITY_UPDATE',

	PRESCRIPTION_CREATE_REQUESTED: 'DOCTOR/PRESCRIPTION_CREATE_REQUESTED',
	PRESCRIPTION_CREATE_SUCCEEDED: 'DOCTOR/PRESCRIPTION_CREATE_SUCCEEDED',
	PRESCRIPTION_CREATE_FAILED: 'DOCTOR/PRESCRIPTION_CREATE_FAILED'
};


export const actions = {
	fetchCustomers: () => ({type: types.CUSTOMERS_FETCH_REQUESTED}),
	fetchCustomersSucceeded: (customers) => ({type: types.CUSTOMERS_FETCH_SUCCEEDED, customers}),
	fetchCustomersFailed: (error) => ({type: types.CUSTOMERS_FETCH_FAILED, error}),

	fetchMedicines: () => ({type: types.MEDICINES_FETCH_REQUESTED}),
	fetchMedicinesSucceeded: (medicines) => ({type: types.MEDICINES_FETCH_SUCCEEDED, medicines}),
	fetchMedicinesFailed: (error) => ({type: types.MEDICINES_FETCH_FAILED, error}),

  setCustomer: (customerId) => ({type: types.MEDICINE_ADD, customerId}),

  addMedicine: (medicine) => ({type: types.MEDICINE_ADD, medicine}),
  removeMedicine: (medicineId) => ({type: types.MEDICINE_REMOVE, medicineId}),
  updateMedicineQuantity: (medicineId, quantity) => ({type: types.MEDICINE_QUANTITY_UPDATE, medicineId, quantity}),

	createPrescription: () => ({type: types.PRESCRIPTION_CREATE_REQUESTED}),
	createPrescriptionSucceeded: () => ({type: types.PRESCRIPTION_CREATE_SUCCEEDED}),
	createPrescriptionFailed: (error) => ({type: types.PRESCRIPTION_CREATE_FAILED, error}),
};




