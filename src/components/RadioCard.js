import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

export const RadioCard = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();
	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				width="150px"
				cursor="pointer"
				borderWidth="1px"
				borderColor="black"
				fontWeight="500"
				fontSize="20px"
				borderRadius="md"
				color="rgb(44, 122, 123)"
				_checked={{
					bg: "teal.600",
					color: "white",
					borderColor: "teal.600",
				}}
				_focus={{
					boxShadow: "outline",
				}}
				px={5}
				py={3}
			>
				{props.children} &#8381;
			</Box>
		</Box>
	);
};
