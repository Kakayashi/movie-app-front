import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/fa";
export const Wrapper = styled.div`
	width: 100%;
	height: 60px;
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Logo = styled.div`
	margin: 30px;
	font-size: 30px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.gold};
	padding: 5px;
	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
		background: ${({ theme }) => theme.colors.blackHover};
	}
`;

export const StyledLink = styled(NavLink)`
	font-size: 20px;
	margin-inline: 15px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.gold};
	font-size: 20px;
	transition: 0.2s ease-in-out;
	padding: 5px;

	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
		background: ${({ theme }) => theme.colors.blackHover};
	}
`;

export const StyledSearch = styled.input`
	border: 2px solid ${({ theme }) => theme.colors.gold};
	width: 200px;
	height: 30px;
	background: ${({ theme }) => theme.colors.black};
	border-radius: 30px;
	font-size: 20px;
	text-align: center;
	margin-inline: 15px;
	color: ${({ theme }) => theme.colors.gold};

	position: relative;
	cursor: pointer;
`;

export const StyledSearchWrapper = styled.div`
	position: relative;

	svg {
		position: absolute;
		left: 25px;
		top: 10px;
		fill: ${({ theme }) => theme.colors.gold};
		cursor: pointer;
	}
`;
