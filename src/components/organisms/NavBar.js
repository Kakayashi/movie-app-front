import React from "react";
import { useEffect, useState } from "react";
import getWindowSize from "../atoms/getWindowSize/getWinowSize";
// import SlideBar from "../SlideBar/SlideBar";
import {
	Wrapper,
	Logo,
	StyledLink,
	StyledSearch,
	StyledSearchWrapper,
} from "./NavBar.style";
import { FaSearch } from "react-icons/fa";

function NavBar() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			{windowSize.innerWidth <= 900 ? (
				// <SlideBar />
				<h2>Small menu</h2>
			) : (
				<Wrapper>
					<Logo>MovieApp</Logo>
					<StyledLink to="/">Home</StyledLink>
					<StyledLink to="/ranking">Ranking</StyledLink>
					<StyledSearchWrapper>
						<StyledSearch placeholder="Search"></StyledSearch>
						<FaSearch />
					</StyledSearchWrapper>
				</Wrapper>
			)}
		</>
	);
}

export default NavBar;
