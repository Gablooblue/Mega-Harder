import axios from "axios";
const SERVER_URL = "http://localhost:3000";


export const fetchPrescriptionsApi = (doctorId) => {
	console.log("fetchTransactionsApi");
	const response = axios.get(`${SERVER_URL}/users/${doctorId}/transactions`);
	console.log(response);
	return response;
};




export const createPrescriptionApi = (doctorId, payload) => {
	console.log("createPrescriptionApi");
	console.log(payload);
	const config = {
		headers: {'Authorization': "JWT " + token}
	};
	const response = axios.post(`${SERVER_URL}/users/${doctorId}/prescriptions`, payload,
		config
	);
	console.log("response");
	console.log(response);
	return response;
};

