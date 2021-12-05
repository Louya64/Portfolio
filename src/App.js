import Header from "./components/Header";
import About from "./components/About";
import Projets from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Projets />
			<Contact />
		</div>
	);
}

export default App;
