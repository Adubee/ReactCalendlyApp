import { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Teams from "./Components/Teams";
import Individuals from "./Components/Individuals";
import Enterprise from "./Components/Enterprise";

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path='/individuals' element={<Individuals />}></Route>
					<Route path='/teams' element={<Teams />}></Route>
					<Route path='/enterprise' element={<Enterprise />}></Route>
				</Routes>
			</>
		);
	}
}

export default App;
