import React from 'react';
import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
} from 'react-bootstrap';
import avatar from '../assets/images/contacto.png';

const LetsWork = () => {
	return (
		<Container>
			<h1 className="title-section">Contacto</h1>
			<Row lg={2}>
				<Col lg={7}>
					<Form style={{ marginTop: '6rem', fontSize: '2rem' }}>
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="ingresa tu email..."
								style={{
									fontSize: '1.5rem',
								}}
							/>
						</Form.Group>
						<FloatingLabel controlId="floatingTextarea2" label="escribeme...">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{
									height: '10rem',
									maxHeight: '20rem',
									fontSize: '2rem',
								}}
							/>
						</FloatingLabel>
						<Button style={{ fontSize: '2rem' }}>Enviar</Button>
					</Form>
				</Col>
				<Col lg={5}>
					<img src={avatar} alt="" />
				</Col>
			</Row>
		</Container>
	);
};

export default LetsWork;
