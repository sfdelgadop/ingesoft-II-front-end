import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MDBInput, MDBCol,MDBFormInline,MDBIcon,MDBBtn } from "mdbreact";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
	}

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}  />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink /*style={{color: 'white'}}*/ className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Recetas</NavLink>
                            </NavItem>
                            </Nav>  
                        </Collapse>
                        <MDBCol md="13">
                            <MDBFormInline className="md-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <MDBBtn outline color="dark" color="dark" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
                            </MDBFormInline>                             
                        </MDBCol>                        
                        <a  href="Al componente login supongo :V"><img src='assets/images/Login.png' height="50" width="70" alt='Ristorante Con Fusion' /> </a>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;