import React from 'react';
import { Container } from 'react-bootstrap';
import fondo from '../assets/images/background.jpg';
import cv from '../../public/pretti-omar-cv.pdf';

const Home = () => {
	return (
		<>
			<img
				src={fondo}
				alt=""
				style={{
					height: '100vh',
					width: '100%',
					position: 'absolute',
				}}
			/>
			<Container id="home">
				<div
					style={{
						padding: '8%',
						paddingTop: '15%',
						position: 'relative',
						marginBottom: '16rem',
					}}
				>
					<h1
						style={{
							fontSize: '10rem',
							color: 'white',
						}}
						className="title-machine"
					>
						Pretti
						<br />
						Omar
					</h1>
					<h2
						style={{
							color: 'white',
							fontSize: '1rem',
							marginLeft: '2rem',
						}}
					>
						Front end Developer
					</h2>

					<a
						href={cv}
						download="Pretti Omar CV"
						className="btn"
						style={{ background: '#141414', color: 'white' }}
					>
						Descargar CV
					</a>
				</div>
			</Container>
		</>
	);
};

export default Home;
