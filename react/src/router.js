import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./app";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import DoctorPrescriptionListView from "./containers/DoctorPrescriptionList";
import DoctorPrescriptionNewView from "./containers/DoctorPrescriptionNew";
import CustomerPrescriptionListView from "./containers/CustomerPrescriptionList";
import CustomerPrescriptionNewView from "./containers/CustomerPrescriptionNew";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/doctor/prescription/list" component={DoctorPrescriptionListView}/>
      <Route path="/doctor/prescription/new" component={DoctorPrescriptionNewView}/>
      <Route path="/customer/prescription/list" component={CustomerPrescriptionListView}/>
      <Route path="/customer/prescription/new" component={CustomerPrescriptionNewView}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
