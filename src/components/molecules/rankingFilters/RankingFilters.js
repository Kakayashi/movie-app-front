import React, { useState } from "react";
import {
	RankingFiltersWrapper,
	RankingFilterTitle,
	FiltersContainer,
} from "./RankingFilters.style";
import { CustomSwitch } from "../../atoms/switch/CustomSwitch";
import CustomSlider from "../../atoms/customSlider/CustomSlider";
import GenreSelect from "../../atoms/select/GenreSelect";
import YearSelect from "../../atoms/select/YearSelect";

function RankingFilters() {
	const [Adult, setAdult] = useState(true);
	const [Rating, setRating] = useState(5.0);
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState("");

	const handleAdultChange = (value) => {
		setAdult(value);
	};

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleGenreChange = (event) => {
		setGenre(event.target.value);
	};

	const handleYearChange = (event) => {
		setYear(event.target.value);
	};

	console.log({
		Adult: Adult,
		Rating: Rating,
		genre: genre,
		year: year,
	});

	return (
		<RankingFiltersWrapper>
			<RankingFilterTitle>Filters</RankingFilterTitle>
			<FiltersContainer>
				<CustomSwitch label={"Adult"} onSwitchChange={handleAdultChange} />
				<CustomSlider label={"Rating"} onSwitchChange={handleRatingChange} />
				<GenreSelect onSwitchChange={handleGenreChange} val={genre} />
				<YearSelect onSwitchChange={handleYearChange} val={year} />
			</FiltersContainer>
		</RankingFiltersWrapper>
	);
}

export default RankingFilters;
