import React from 'react';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.goToDoctorPrescriptionListPage = this.goToDoctorPrescriptionListPage.bind(this);
		this.goToDoctorPrescriptionNewPage = this.goToDoctorPrescriptionNewPage.bind(this);
		this.goToCustomerPrescriptionListPage = this.goToCustomerPrescriptionListPage.bind(this);
		this.goToCustomerPrescriptionNewPage = this.goToCustomerPrescriptionNewPage.bind(this);
	}

  goToDoctorPrescriptionListPage () {
    this.props.dispatch(push('/doctor/prescription/list'));
  };

  goToDoctorPrescriptionNewPage () {
    this.props.dispatch(push('/doctor/prescription/new'));
  };

  goToCustomerPrescriptionListPage () {
    this.props.dispatch(push('/customer/prescription/list'));
  };

  goToCustomerPrescriptionNewPage () {
    this.props.dispatch(push('/customer/prescription/new'));
  };

  render() {
    const doctorPrescriptionListClass = classNames({
      active: this.props.location && this.props.location.pathname === '/doctor/prescription/list'
    });

    const doctorPrescriptionNewClass = classNames({
      active: this.props.location && this.props.location.pathname === '/doctor/prescription/new'
    });

    const customerPrescriptionListClass = classNames({
      active: this.props.location && this.props.location.pathname === '/customer/prescription/list'
    });

    const customerPrescriptionNewClass = classNames({
      active: this.props.location && this.props.location.pathname === '/customer/prescription/new'
    });

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Poyd</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <li role="presentation" className={doctorPrescriptionListClass}><a role="button" onClick={this.goToDoctorPrescriptionListPage}>Doctor Prescriptions</a></li>
          <li role="presentation" className={doctorPrescriptionNewClass}><a role="button"  onClick={this.goToDoctorPrescriptionNewPage}>New Doctor Prescriptions</a></li>

          <li role="presentation" className={customerPrescriptionListClass}><a role="button" onClick={this.goToCustomerPrescriptionListPage}>Customer Prescriptions</a></li>
          <li role="presentation" className={customerPrescriptionNewClass}><a role="button"  onClick={this.goToCustomerPrescriptionNewPage}>New Customer Prescriptions</a></li>
        </Nav>
      </Navbar>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
    return {
        location: state.routing.location
    };
};

export default connect(mapStateToProps)(Header);
