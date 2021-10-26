import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Alex Evans</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;