import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Mihyun's prj</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Movis</Nav.Link>
                        <Nav.Link href='/news'>News</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav>
                        <Nav.Link href='/login'>LogIn</Nav.Link>
                        <Nav.Link href='/signup'>
                            SignUp
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;