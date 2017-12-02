import {types} from "../actions/customerPrescriptionList";
import {STATUS_INITIAL, STATUS_LOADING, STATUS_SUCCESSFUL, STATUS_FAILED} from "../constants";

const initialState = {
	prescriptions: {
		data: [],
		error: '',
		status: STATUS_INITIAL
	}
};


export default function customerPrescriptionListReducer(state = initialState, action) {
	switch (action.type) {
		case types.PRESCRIPTIONS_FETCH_REQUESTED:
			return {
				...state,
				prescriptions: {
					...state.prescriptions,
					status: STATUS_LOADING
				}
			};
		case types.PRESCRIPTIONS_FETCH_SUCCEEDED:
			let prescriptions = [];
			action.prescriptions.forEach(function (prescription) {
				prescriptions.push(extractPrescriptionDetails(prescription));
			});
			return {
				...state,
				prescriptions: {
					...state.prescriptions,
					status: STATUS_SUCCESSFUL,
					data: prescriptions
				}
			};
		case types.PRESCRIPTIONS_FETCH_FAILED:
			return {
				...state,
				prescriptions: {
					...state.prescriptions,
					status: STATUS_FAILED,
					error: action.error
				}
			};
		default:
			return state;
	}
}


function extractPrescriptionDetails(prescription) {
  return prescription;
}
