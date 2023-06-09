import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { StyledSlider } from "./CustomSlider.style";

export default function CustomSlider({ label, onSwitchChange }) {
	const handleChange = (value) => {
		onSwitchChange(value);
	};

	return (
		<>
			<Box sx={{ width: 200 }}>
				<StyledSlider
					aria-label={label}
					defaultValue={10}
					getAriaValueText={handleChange}
					valueLabelDisplay="auto"
					step={0.25}
					marks
					min={1}
					max={10}
				/>
			</Box>
			Rating:
		</>
	);
}
