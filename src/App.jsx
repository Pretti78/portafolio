import './App.css';
import Home from './components/Home';
import LetsWork from './components/LetsWork';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SobreMi from './components/SobreMi';
import Technologies from './components/Technologies';

function App() {
	return (
		<div style={{ background: '#141414' }}>
			<NavBar />
			<Home />
			<SobreMi />
			<Technologies />
			<Projects />
			<LetsWork />
		</div>
	);
}

export default App;
