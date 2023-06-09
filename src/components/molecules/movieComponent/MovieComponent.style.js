import styled from "styled-components";

export const MovieWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 100px;
	color: #fff;
`;

export const MovieTitle = styled.h1`
	color: #fff;
	font-size: 44px;
	margin-bottom: 0;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ gap }) => (gap ? gap : "0")};
	flex-wrap: wrap;
`;
export const RowInfo = styled.div`
	margin: 10px 10px;
	&:nth-child(1) {
		margin-left: 0px;
	}
`;

export const GenereContainer = styled.div`
	font-size: 16px;
	padding: 4px;
	border: 2px solid #fff;
	border-radius: 30px;
	margin-inline: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: ${({ theme }) => theme.colors.gold};
		color: #000;
	}
`;

export const MoviePoster = styled.img`
	width: 250px;
`;

export const VideoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const VideoTitle = styled.h2`
	font-size: 32px;
	margin-bottom: 0;
`;

export const CarouselWrapper = styled.div`
	img {
		width: 100px;
		height: 100px;
	}
`;
