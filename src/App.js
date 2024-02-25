import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signup } from "./pages";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
