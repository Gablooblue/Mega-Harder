import {types} from "../actions/doctorPrescriptionNew";
import {STATUS_INITIAL, STATUS_LOADING, STATUS_SUCCESSFUL, STATUS_FAILED} from "../constants";

const initialState = {
  customers: {
    data: [],
    error: '',
    status: STATUS_INITIAL
  },
  medicines: {
    data: [],
    error: '',
    status: STATUS_INITIAL
  },
  selectedCustomerId: null,
  selectedMedicines: [],

  // Submission status
  status: STATUS_INITIAL,
  error: ''
};


export default function doctorPrescriptionNewReducer(state = initialState, action) {
  switch (action.type) {
    case types.CUSTOMERS_FETCH_REQUESTED:
      return {
        ...state,
        customers: {
          ...state.customers,
          status: STATUS_LOADING
        }
      };
    case types.CUSTOMERS_FETCH_SUCCEEDED:
      let customers = [];
      action.customers.forEach(function (customer) {
        customers.push(extractCustomerDetails(customer));
      });
      return {
        ...state,
        customers: {
          ...state.customers,
          status: STATUS_SUCCESSFUL,
          data: customers
        }
      };
    case types.CUSTOMERS_FETCH_FAILED:
      return {
        ...state,
        customers: {
          ...state.customers,
          status: STATUS_FAILED,
          error: action.error
        }
      };

    case types.MEDICINES_FETCH_REQUESTED:
      return {
        ...state,
        medicines: {
          ...state.medicines,
          status: STATUS_LOADING
        }
      };
    case types.MEDICINES_FETCH_SUCCEEDED:
      let medicines = [];
      action.medicines.forEach(function (medicine) {
        medicines.push(extractMedicineDetails(medicine));
      });
      return {
        ...state,
        medicines: {
          ...state.medicines,
          status: STATUS_SUCCESSFUL,
          data: medicines
        }
      };
    case types.MEDICINES_FETCH_FAILED:
      return {
        ...state,
        medicines: {
          ...state.medicines,
          status: STATUS_FAILED,
          error: action.error
        }
      };

    case types.CUSTOMER_SET:
      return {
        ...state,
        selectedCustomerId: action.customerId
      };

    case types.MEDICINE_ADD:
      return {
        ...state,
        selectedMedicines: [...state.selectedMedicines, action.medicine]
      };
    case types.MEDICINE_REMOVE:
      return {
        ...state,
        selectedMedicines: state.selectedMedicines.filter(medicine => medicine.id !== action.medicineId)
      };
    case types.MEDICINE_QUANTITY_UPDATE:
      const updatedMedicines = state.selectedMedicines.map(medicine => {
        if(medicine.id === action.medicineId){
          return {
            ...medicine,
            quantity: action.quantity
          }
        }
        return medicine
      });

      return {
        ...state,
        selectedMedicines: updatedMedicines
      };

    case types.PRESCRIPTION_CREATE_REQUESTED:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case types.PRESCRIPTION_CREATE_SUCCEEDED:
      return {
        ...state,
        status: STATUS_SUCCESSFUL,
      };
    case types.PRESCRIPTION_CREATE_FAILED:
      return {
        ...state,
        status: STATUS_FAILED,
        error: action.error
      };

    default:
      return state;
  }
}

// FIXME: Provide real value
// export const getDoctorId = state => ;
export const getDoctorId = state => 1;
export const getSelectedMedicines= state => state.customerPrescriptionNew.selectedMedicines;
export const getSelectedCustomerId= state => state.customerPrescriptionNew.selectedCustomerId;


function extractCustomerDetails(customer) {
  return customer;
}

function extractMedicineDetails(medicine) {
  return medicine;
}


export function getPrescriptionPayload(state) {
	const selectedMedicines = getSelectedMedicines(state);
	const selectedCustomerId = getSelectedCustomerId(state);

	return {
		medicines: selectedMedicines,
		selectedCustomerId: selectedCustomerId
	};
}



