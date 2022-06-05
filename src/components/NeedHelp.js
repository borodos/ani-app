import { Avatar, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "../css/NeedHelp.css";

export const NeedHelp = () => {
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
						<Card className="card-person">
							<Image
								className="img-person"
								borderRadius="full"
								boxSize="200px"
								src="https://bit.ly/dan-abramov"
								alt="Dan Abramov"
							/>
							<Card.Body>
								<Card.Title>
									<Heading as="h4" size="md">
										Василиса Соколова
									</Heading>
								</Card.Title>
								<Card.Text>
									<Heading as="h5" size="sm">
										39 лет, Республика Башкортостан
									</Heading>

									<div>
										<span>Нужно пожертвовать: 352 000</span>
									</div>
									<div>
										<span>Осталось: 54 124</span>
									</div>
								</Card.Text>
							</Card.Body>
							<Button mt={4} colorScheme="teal" type="submit" className="w-50">
								Помочь
							</Button>
						</Card>
						<Card className="card-person">
							<Image
								className="img-person"
								borderRadius="full"
								boxSize="200px"
								src="https://bit.ly/dan-abramov"
								alt="Dan Abramov"
							/>
							<Card.Body>
								<Card.Title>
									<Heading as="h4" size="md">
										Василиса Соколова
									</Heading>
								</Card.Title>
								<Card.Text>
									<Heading as="h5" size="sm">
										39 лет, Республика Башкортостан
									</Heading>

									<div>
										<span>Нужно пожертвовать: 352 000</span>
									</div>
									<div>
										<span>Осталось: 54 124</span>
									</div>
								</Card.Text>
							</Card.Body>
							<Button mt={4} colorScheme="teal" type="submit" className="w-50">
								Помочь
							</Button>
						</Card>
						<Card className="card-person">
							<Image
								className="img-person"
								borderRadius="full"
								boxSize="200px"
								src="https://bit.ly/dan-abramov"
								alt="Dan Abramov"
							/>
							<Card.Body>
								<Card.Title>
									<Heading as="h4" size="md">
										Василиса Соколова
									</Heading>
								</Card.Title>
								<Card.Text>
									<Heading as="h5" size="sm">
										39 лет, Республика Башкортостан
									</Heading>

									<div>
										<span>Нужно пожертвовать: 352 000</span>
									</div>
									<div>
										<span>Осталось: 54 124</span>
									</div>
								</Card.Text>
							</Card.Body>
							<Button mt={4} colorScheme="teal" type="submit" className="w-50">
								Помочь
							</Button>
						</Card>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
