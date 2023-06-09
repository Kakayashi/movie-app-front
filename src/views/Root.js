import React from "react";
import NavBar from "../components/organisms/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/organisms/Home";
import Ranking from "../components/organisms/Ranking";
import Movies from "../components/organisms/Movies";

function Root() {
	return (
		<BrowserRouter>
			<>
				<NavBar />

				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/ranking" exact element={<Ranking />} />
					<Route path="/movies/:movieID" exact element={<Movies />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default Root;
