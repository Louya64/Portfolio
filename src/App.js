import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projets from "./components/Projects";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Projets />
			<Footer />
		</div>
	);
}

export default App;
