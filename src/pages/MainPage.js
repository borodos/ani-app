import React from "react";
import { Container } from "react-bootstrap";
import { CardHeroes } from "../components/CardHeroes";
import "../css/MainPage.css";

export const MainPage = () => {
	return (
		<Container
			className="d-flex justify-content-center align-items-center flex-grow-1 mt-5"
			style={{ backgroundColor: "#eee" }}
		>
			<CardHeroes />
		</Container>
	);
};
