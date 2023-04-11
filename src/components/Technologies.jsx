import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bootstrapIcon from '../assets/icons/bootstrap.ico';
import cssIcon from '../assets/icons/css.ico';
import gitIcon from '../assets/icons/git.ico';
import htmlIcon from '../assets/icons/html.ico';
import javaScriptIcon from '../assets/icons/javascript.ico';
import reactIcon from '../assets/icons/react.ico';
import reduxIcon from '../assets/icons/redux.ico';

const Technologies = () => {
	return (
		<Container style={{ marginTop: '5rem' }} id="tegnologias">
			<h1 className="title-section">Tecnologias</h1>
			<Row
				style={{
					marginTop: '2rem',
					justifyContent: 'center',
					textAlign: 'center',
				}}
				lg={3}
			>
				<Col>
					<img src={htmlIcon} alt="" className="iconsT" />
					<h3 className="styleH3">HTML</h3>
				</Col>
				<Col>
					<img src={reactIcon} alt="" className="iconsT" />
					<h3 className="styleH3">React.js</h3>
				</Col>
				<Col>
					<img src={javaScriptIcon} alt="" className="iconsT" />
					<h3 className="styleH3">JavaScript</h3>
				</Col>
				<Col>
					<img src={cssIcon} alt="" className="iconsT" />
					<h3 className="styleH3">CSS</h3>
				</Col>
				<Col>
					<img src={reduxIcon} alt="" className="iconsT" />
					<h3 className="styleH3">Redux</h3>
				</Col>
				<Col>
					<img src={bootstrapIcon} alt="" className="iconsT" />
					<h3 className="styleH3">Bootstrap</h3>
				</Col>
				<Col>
					<img src={gitIcon} alt="" className="iconsT" />
					<h3 className="styleH3">Git</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Technologies;
