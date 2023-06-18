"use client";

import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
    return(
        <Navbar bg='primary' variant='dark' sticky='top' expand='sm' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls='main-navbar' />
                <Navbar.Collapse id='main-navbar'>
                    <Nav>
                        <Nav.Link href='/login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}