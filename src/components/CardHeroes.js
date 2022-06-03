import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "../css/CardHeroes.css";

export const CardHeroes = () => {
	return (
		<div className="wrapper">
			<Carousel style={{ width: "100%", height: "100%" }}>
				<Carousel.Item
					style={{ width: "100%", height: "500px" }}
					interval={1000}
				>
					<Card style={{ width: "50rem", height: "100%" }}>
						<Card.Body>
							<Card.Title>Они - настоящие супергерои!</Card.Title>

							<Card.Text>
								<span>Вася Пупкин</span> &nbsp;
								<span>Пожертвовал 100000 рублей.</span>
							</Card.Text>
						</Card.Body>
					</Card>
					<div className="person-img"></div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
