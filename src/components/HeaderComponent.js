import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

//header component

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
	}

	render() {
		return (
			<div className="row justify-content-center">
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink /*style={{color: 'white'}}*/ className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Recetas</NavLink>
								</NavItem>
							</Nav>	
						</Collapse>
						<MDBCol md="12">
							<MDBFormInline className="md-form">
								<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
								<MDBBtn outline color="dark" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
								<a href="/home"><img src='assets/images/Login.png' height="50" width="70" alt='Master Cheif' /> </a>
							</MDBFormInline>
						</MDBCol>
					</div>
				</Navbar>
			</div>
		);
	}
}

export default Header;