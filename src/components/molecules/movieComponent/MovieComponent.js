import React, { useState } from "react";
import {
	MovieWrapper,
	MovieTitle,
	RowContainer,
	GenereContainer,
	RowInfo,
	MoviePoster,
	VideoWrapper,
	VideoTitle,
	CarouselWrapper,
} from "./MovieComponent.style";
import Player from "../../atoms/player/Player";
import useMovieVideos from "../../../hooks/useMovieVideos";
import CustomButton from "../../atoms/button/CustomButton";
import useMovieImages from "../../../hooks/useMovieImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MovieComponent({ movie }) {
	const clips = useMovieVideos(movie.id);
	const { images, isLoading, error } = useMovieImages(movie.id);
	const [actualClip, setActualClip] = useState(clips[0]);
	const [clipIndex, setClipIndex] = useState(0);

	const posterUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

	const handleNextClip = () => {
		const nextIndex = (clipIndex + 1) % clips.length;
		setClipIndex(nextIndex);
		setActualClip(clips[nextIndex]);
		console.log("nextClip", actualClip);
		console.log("nextClip", clipIndex);
	};

	const handlePrevClip = () => {
		const prevIndex = clipIndex === 0 ? clips.length - 1 : clipIndex - 1;
		setClipIndex(prevIndex);
		setActualClip(clips[prevIndex]);
	};

	console.log("clips", clips);
	console.log("images", images);

	return (
		<MovieWrapper>
			<MovieTitle>{movie.title}</MovieTitle>
			<RowContainer>
				Generes:
				{movie.genres.map((genere) => (
					<GenereContainer>{genere.name}</GenereContainer>
				))}
			</RowContainer>
			<RowContainer>
				<RowInfo>Relese: {movie.release_date}</RowInfo>
				<RowInfo>For adults: {movie.adult ? "yes" : "no"}</RowInfo>
			</RowContainer>
			<RowContainer gap={"140px"}>
				<VideoWrapper>
					<VideoTitle>Poster:</VideoTitle>
					<MoviePoster src={posterUrl} />
				</VideoWrapper>
				<VideoWrapper>
					<VideoTitle>
						Trailer {clipIndex + 1} of {clips.length + 1}
						<CustomButton text={"Prev"} func={handlePrevClip} />
						<CustomButton text={"Next"} func={handleNextClip} />
					</VideoTitle>
					{clips.length > 0 && <Player videoId={clips[clipIndex].key} />}
				</VideoWrapper>
			</RowContainer>
			<RowContainer>
				<VideoWrapper>
					<VideoTitle>Gallery:</VideoTitle>
					{isLoading ? (
						<VideoTitle>Loading...</VideoTitle>
					) : (
						<Carousel width={"20%"}>
							{images.map((el) => {
								return (
									<div>
										<img
											src={
												"https://image.tmdb.org/t/p/original/" + el.file_path
											}
										/>
									</div>
								);
							})}
						</Carousel>
					)}
				</VideoWrapper>
			</RowContainer>
		</MovieWrapper>
	);
}

export default MovieComponent;
