import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "../css/CardHeroes.css";

export const CardHeroes = () => {
	return (
		<Carousel
			className="wrapper-card-heroes"
			indicators={false}
			controls={false}
		>
			<Carousel.Item className="w-100  h-100" interval={4000}>
				<Card className="card-heroes">
					<Card.Body>
						<Card.Title>Они - настоящие супергерои!</Card.Title>

						<Card.Text>
							<span>Вася Пупкин</span> &nbsp;
							<span>Пожертвовал 100000 рублей.</span>
						</Card.Text>
					</Card.Body>
					<div className="person-img"></div>
				</Card>
			</Carousel.Item>
			<Carousel.Item className="w-100  h-100" interval={4000}>
				<Card className="card-heroes">
					<Card.Body>
						<Card.Title>Они - настоящие супергерои!</Card.Title>

						<Card.Text>
							<span>Дима Писюшкин</span> &nbsp;
							<span>Пожертвовал 100000 рублей.</span>
						</Card.Text>
					</Card.Body>
					<div className="person-img"></div>
				</Card>
			</Carousel.Item>
		</Carousel>
	);
};
