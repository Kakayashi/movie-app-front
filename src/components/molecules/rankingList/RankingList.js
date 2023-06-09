import React, { useState } from "react";
import useTrendingData from "../../../hooks/useTrendingData";
import { useNavigate } from "react-router-dom";
import {
	ListWrapper,
	ListTitle,
	ListItem,
	ListItemInfo,
	ListItemInfoNumber,
	ListItemInfoTitle,
	ListItemInfoImage,
	ListItemBackground,
	ListItemRatigContainer,
	StyledStatr,
	Review,
	ButtonWrapper,
} from "./RankingList.style";
import { AiFillStar } from "react-icons/ai";
import CustomButton from "../../atoms/button/CustomButton";

function RankingList() {
	const { trendingData, loading, error } = useTrendingData();
	const [selectedMovie, setSelectedMovie] = useState(null);
	const navigate = useNavigate();

	const handleItemClick = (movie) => {
		setSelectedMovie(movie);
		navigate(`/movies/${movie.id}`);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error occurred: {error.message}</div>;
	}
	console.log("trendingData", trendingData);
	const imgUrl = "https://image.tmdb.org/t/p/original/";
	let index = -1;

	return (
		<>
			<ListWrapper>
				<ListTitle>Top 100 movies</ListTitle>
				{trendingData.results.map((item) => {
					if (item.media_type === "movie") {
						index++;
						return (
							<ListItemBackground key={item.id} index={index}>
								<ListItem onClick={() => handleItemClick(item)}>
									<ListItemInfo>
										<ListItemInfoNumber>{index + 1 + "."}</ListItemInfoNumber>
										<ListItemInfoImage src={imgUrl + item.poster_path} />
										<ListItemInfoTitle>{item.title}</ListItemInfoTitle>
									</ListItemInfo>
									<ListItemRatigContainer>
										<StyledStatr size={24} />
										<Review reviewsnumber={item.vote_count}>
											{item.vote_average.toFixed(1)}
										</Review>
									</ListItemRatigContainer>
								</ListItem>
							</ListItemBackground>
						);
					}
				})}
			</ListWrapper>
			<ButtonWrapper>
				<CustomButton text={"Load more"} />
			</ButtonWrapper>
		</>
	);
}

export default RankingList;
