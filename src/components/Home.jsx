import React from 'react';
import { Button, Container } from 'react-bootstrap';
import fondo from '../assets/images/background.jpg';

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
			<Container>
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
						Front-end Developer
					</h2>
					<Button className="btn ">Descargar CV</Button>
				</div>
			</Container>
		</>
	);
};

export default Home;
