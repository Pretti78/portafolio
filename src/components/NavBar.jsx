import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar
			bg="primary"
			variant="primary"
			expand="lg"
			fixed="top"
			style={{ padding: '10px' }}
			className="navBar-container"
			id="navBar"
		>
			<Container>
				<Navbar.Brand
					href="#home"
					style={{ fontSize: '2.5rem', color: 'white' }}
				>
					Pretti Omar <i className="fa-solid fa-laptop-code"></i>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="me-auto"
						style={{
							fontSize: '1.2rem',
							color: 'white',
							textShadow: '0.3rem 0.3rem 0.4rem white',
						}}
					>
						<Nav.Link href="#home" style={{ color: 'white' }}>
							Inicio
						</Nav.Link>
						<Nav.Link href="#sobreMi" style={{ color: 'white' }}>
							Sobre Mi
						</Nav.Link>
						<Nav.Link href="#tegnologias" style={{ color: 'white' }}>
							Tecnologias
						</Nav.Link>
						<Nav.Link href="#proyectos" style={{ color: 'white' }}>
							Proyectos
						</Nav.Link>
						<Nav.Link href="#contactame" style={{ color: 'white' }}>
							Contactame
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
