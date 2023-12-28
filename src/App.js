
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Notfound from "./pages/404";


import "./app.css";

function App() {
	// useEffect(() => {
	// 	if (TRACKING_ID !== "") {
	// 		ReactGA.initialize(TRACKING_ID);
	// 	}
	// }, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
