import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import yo from '../assets/images/sobreMi.png';

const SobreMi = () => {
	return (
		<Container id="sobreMi">
			<Row lg={2}>
				<Col lg={4}>
					<h1 className="title-section">Sobre mi</h1>
					<img src={yo} alt="" style={{ height: '45rem' }} />
				</Col>
				<Col
					lg={8}
					style={{
						textAlign: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							width: '60rem',
							background: '#202020',
							borderRadius: '0.7rem',
							padding: '2rem',
							fontSize: '2rem',
						}}
					>
						<h2 className="colorh2">¿Quién soy?</h2>
						<p>
							¡Hola! Mi nombre es Omar Pretti pero puedes llamarme Pretti. Soy
							un apasionado por el mundo del Desarrollo Web.
						</p>
						<h2 className="colorh2">Mis estudios</h2>
						<p>
							En 2019 comencé a estudiar Ingeniería en Informática en la
							Universidad Nacional De La Plata y en 2022 decidí enforcame en lo
							que me apasiona, entonces comencé a estudiar en Academlo y me
							formé como desarrollador web full-stack.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SobreMi;
