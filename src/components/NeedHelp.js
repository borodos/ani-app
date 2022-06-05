import { Avatar, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
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
			<Carousel
				className="carousel-need-help"
				controls={true}
				indicators={false}
			>
				<Carousel.Item className="w-100 h-100">
					<div className="d-flex w-100 h-100 justify-content-around align-items-center">
						{neededs.map((value, index, array) => (
							<CardNeeded key={`${value}-${index}`} value={value} />
						))}
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
