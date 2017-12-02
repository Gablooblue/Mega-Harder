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
	}

  goToDoctorPrescriptionListPage () {
    this.props.dispatch(push('/doctor/prescription/list'));
  };

  render() {
    const doctorPrescriptionListClass = classNames({
      active: this.props.location && this.props.location.pathname === '/doctor/prescription/list'
    });

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Poyd</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <li className={doctorPrescriptionListClass}><a  onClick={this.goToDoctorPrescriptionListPage}>Prescriptions</a></li>
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
