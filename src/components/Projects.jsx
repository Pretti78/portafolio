import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import rick from '../assets/images/rickAndMorty.png';
import eCommerce from '../assets/images/ecommerce.png';
import portafolioEjemplo from '../assets/images/portafolioEjemplo.png';

const Projects = () => {
	return (
		<Container style={{ marginTop: '2rem' }} id="proyectos">
			<h1 className="title-section">Proyectos</h1>
			<Row
				lg={3}
				style={{
					marginTop: '5rem',
					paddingBottom: '2rem',
					justifyContent: 'center',
					textAlign: 'center',
					fontSize: '1.5rem',
				}}
			>
				<Col>
					<Card style={{ width: '30rem', height: '35rem', margin: '2rem' }}>
						<Card.Img
							variant="top"
							src={eCommerce}
							style={{ height: '20rem' }}
						/>
						<Card.Body>
							<Card.Title style={{ fontSize: '2rem' }}>E-Commerce</Card.Title>
							<Card.Text>
								Tienda donde puedes encontrar productos variados.
							</Card.Text>
							<a href="https://pretti-ecommerce.netlify.app" target="_blank">
								<Button variant="primary">Vamos</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '30rem', height: '35rem', margin: '2rem' }}>
						<Card.Img variant="top" src={rick} style={{ height: '20rem' }} />
						<Card.Body>
							<Card.Title style={{ fontSize: '2rem' }}>
								Rick And Morty
							</Card.Title>
							<Card.Text>
								Quieres conocer los personajes de Rick And Morty?
							</Card.Text>
							<a href="https://pretti-ram.netlify.app" target="_blank">
								<Button variant="primary" style={{ marginTop: '0' }}>
									Vamos
								</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '30rem', height: '35rem', margin: '2rem' }}>
						<Card.Img
							variant="top"
							src={portafolioEjemplo}
							style={{ height: '20rem' }}
						/>
						<Card.Body>
							<Card.Title style={{ fontSize: '2rem' }}>
								Ejemplo de portafolio
							</Card.Title>
							<Card.Text>
								Portafolio responsive, desarrollado con: HTML, CSS y JavaScript.
							</Card.Text>
							<a
								href="https://portafolio-academlo-pretti.netlify.app"
								target="_blank"
							>
								<Button variant="primary" style={{ marginTop: '0' }}>
									Vamos
								</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
