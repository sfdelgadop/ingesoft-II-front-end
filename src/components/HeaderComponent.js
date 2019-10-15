import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MDBInput, MDBCol,MDBFormInline,MDBIcon,MDBBtn } from "mdbreact";

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md" style={{backgroundColor: '#5bc0de'}}>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}  />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink /*style={{color: 'white'}}*/ className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink /*style={{color: 'white'}}*/className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> Acerca de nosotros</NavLink>
                            </NavItem>  
                            <NavItem>
                                <NavLink /*style={{color: 'white'}}*/ className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Recetas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink /*style={{color: 'white'}}*/ className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contáctanos</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        <MDBCol md="15">
                            <MDBFormInline className="md-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
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