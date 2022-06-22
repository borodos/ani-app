import { Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../css/NeedHelp.css";
import { getNeededs } from "../http/neededApi";
import { CardNeeded } from "./CardNeeded";

export const NeedHelp = () => {
	const [neededs, setNeededs] = useState([]);

	useEffect(() => {
		getNeededs().then((data) => {
			setNeededs(data);
		});
	}, []);

	return (
		<div className="wrapper-need-help">
			<Heading as="h2" size="xl" className="mb-4" color="blue.300">
				Нужна ваша помощь
			</Heading>

			<div className="container-need-help">
				{neededs.map((value, index, array) => (
					<CardNeeded key={`${value}-${index}`} value={value} />
				))}
			</div>
		</div>
	);
};
