import axios from "axios";
const SERVER_URL = "http://localhost:3000";


export const fetchMedicinesApi = () => {
	console.log("fetchMedicinesApi");
	const response = axios.get(`${SERVER_URL}/medicine_types`);
	console.log(response);
	return response;
};


export const fetchPrescribedMedicinesApi = (customerId, prescriptionId) => {
	console.log("fetchPrescribedMedicinesApi");
	const response = axios.get(`${SERVER_URL}/users/${customerId}/prescriptions/${prescriptionId}/prescription_medicines`);
	console.log(response);
	return response;
};
