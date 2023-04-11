import { ListGroup } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import LetsWork from './components/LetsWork';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SobreMi from './components/SobreMi';
import Technologies from './components/Technologies';
import linkedin from './assets/icons/linkedin.ico';
import github from './assets/icons/github.ico';

function App() {
	return (
		<div style={{ background: '#141414' }}>
			<NavBar />
			<Home />
			<SobreMi />
			<Technologies />
			<Projects />
			<LetsWork />
			<footer
				style={{
					display: 'flex',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<ListGroup horizontal>
					<a href="https://www.linkedin.com/in/pretti-omar/" target="_blank">
						<ListGroup.Item style={{ padding: '1rem 2rem' }}>
							<img src={linkedin} alt="" />
						</ListGroup.Item>
					</a>
					<a href="https://github.com/Pretti78" target="_blank">
						<ListGroup.Item style={{ padding: '1rem 2rem' }}>
							<img src={github} alt="" />
						</ListGroup.Item>
					</a>
				</ListGroup>
			</footer>
		</div>
	);
}

export default App;
