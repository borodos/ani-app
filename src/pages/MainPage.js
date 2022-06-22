import { observer } from "mobx-react-lite";
import React from "react";
import { Container } from "react-bootstrap";
import { About } from "../components/About";
import { CardHeroes } from "../components/CardHeroes";
import { HowToHelp } from "../components/HowToHelp";
import { NeedHelp } from "../components/NeedHelp";
import "../css/MainPage.css";

export const MainPage = () => {
	return (
		<Container className="d-flex justify-content-center flex-column align-items-center flex-grow-1 mt-5 mb-5">
			<CardHeroes />
			<NeedHelp />
			<HowToHelp />
			<About />
		</Container>
	);
};
