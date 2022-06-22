import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import "../css/CardHeroes.css";

export const CardHeroes = () => {
	return (
		<Carousel
			className="wrapper-card-heroes"
			indicators={false}
			controls={false}
			pause={false}
		>
			<Carousel.Item className="w-100  h-100" interval={3000}>
				<Card className="card-heroes">
					<Card.Body>
						<div className="card-main d-flex flex-column align-items-center">
							<Heading as="h3" size="lg">
								<Text as="i">Они - настоящие супергерои!</Text>
							</Heading>
							<Heading as="h4" size="md" mt={45} mb={3}>
								Дима Петрушев
							</Heading>
							<Text>
								Пожертвовал <Text as="ins">421 000</Text> рублей.
							</Text>
						</div>
					</Card.Body>
					<div className="person-img-1">
						<img
							src="https://rugraphics.ru/wp-content/uploads/licza-lyudej.png"
							alt="Дима Петрушев"
						></img>
					</div>
				</Card>
			</Carousel.Item>
			<Carousel.Item className="w-100  h-100" interval={3000}>
				<Card className="card-heroes">
					<Card.Body>
						<div className="card-main d-flex flex-column align-items-center">
							<Heading as="h3" size="lg">
								<Text as="i">Они - настоящие супергерои!</Text>
							</Heading>
							<Heading as="h4" size="md" mt={45} mb={3}>
								Василий Петрушенко
							</Heading>
							<Text>
								Пожертвовал <Text as="ins">126 000</Text> рублей.
							</Text>
						</div>
					</Card.Body>
					<div className="person-img-2">
						<img
							src="https://polit74.ru/upload/iblock/7ec/Polpred_YAkushev_foto_Lyudmily_Kovalevoy-_3_-_2_.jpg"
							alt="Василий Пертушенко"
						/>
					</div>
				</Card>
			</Carousel.Item>
			<Carousel.Item className="w-100  h-100" interval={3000}>
				<Card className="card-heroes">
					<Card.Body>
						<div className="card-main d-flex flex-column align-items-center">
							<Heading as="h3" size="lg">
								<Text as="i">Они - настоящие супергерои!</Text>
							</Heading>
							<Heading as="h4" size="md" mt={45} mb={3}>
								Виктория Соколова
							</Heading>
							<Text>
								Пожертвовал <Text as="ins">150 000</Text> рублей.
							</Text>
						</div>
					</Card.Body>
					<div className="person-img-3">
						<img
							src="https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg"
							alt="Виктория Соколова"
						/>
					</div>
				</Card>
			</Carousel.Item>
		</Carousel>
	);
};
