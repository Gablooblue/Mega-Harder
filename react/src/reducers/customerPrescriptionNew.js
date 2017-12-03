import {types} from "../actions/customerPrescriptionNew";
import {STATUS_INITIAL, STATUS_LOADING, STATUS_SUCCESSFUL, STATUS_FAILED} from "../constants";

const initialState = {
  medicines: {
    data: [],
    error: '',
    status: STATUS_INITIAL
  },
  prescribedMedicines: {
    data: [],
    error: '',
    status: STATUS_INITIAL
  },
  selectedCustomerId: null,
  OTCMedicines: [],

  // Submission status
  status: STATUS_INITIAL,
  error: ''
};


export default function customerPrescriptionNewReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRESCRIBED_MEDICINES_FETCH_REQUESTED:
      return {
        ...state,
        prescribedMedicines: {
          ...state.prescribedMedicines,
          status: STATUS_LOADING
        }
      };
    case types.PRESCRIBED_MEDICINES_FETCH_SUCCEEDED:
      let prescribedMedicines = [];
      action.medicines.forEach(function (prescribedMedicine) {
        prescribedMedicines.push(extractPrescribedMedicinesDetails(prescribedMedicine));
      });
      return {
        ...state,
        prescribedMedicines: {
          ...state.prescribedMedicines,
          status: STATUS_SUCCESSFUL,
          data: prescribedMedicines
        }
      };
    case types.PRESCRIBED_MEDICINES_FETCH_FAILED:
      return {
        ...state,
        prescribedMedicines: {
          ...state.prescribedMedicines,
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
      const updatedMedicines = state.medicines.map(medicine => {
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

    case types.PRESCRIBED_MEDICINE_QUANTITY_UPDATE:
      const updatedPrescribedMedicines = state.prescribedMedicines.map(medicine => {
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
        selectedMedicines: updatedPrescribedMedicines
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


export const getCustomerPrescriptionMedicine = state => state.customerPrescriptionNew.prescribedMedicines.data;
export const getMedicines = state => state.customerPrescriptionNew.medicines.data;
export const getState = state => state;


function extractPrescribedMedicinesDetails(prescribedMedicine) {
  return prescribedMedicine;
}

function extractMedicineDetails(medicine) {
  return medicine;
}
