import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";

import doctorPrescriptionListReducer from "./doctorPrescriptionList";
import doctorPrescriptionNewReducer from "./doctorPrescriptionNew";
import customerPrescriptionListReducer from "./customerPrescriptionList";
import customerPrescriptionNewReducer from "./customerPrescriptionNew";


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  doctorPrescriptionList: doctorPrescriptionListReducer,
  doctorPrescriptionNew: doctorPrescriptionNewReducer,
  customerPrescriptionList: customerPrescriptionListReducer,
  customerPrescriptionNew: customerPrescriptionNewReducer,
  // your reducer here
});
