import { Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CardNeeded = ({ value }) => {
	const navigate = useNavigate();
	return (
		<Card className="card-person">
			<Image
				className="img-person"
				borderRadius="full"
				boxSize="200px"
				src={process.env.REACT_APP_SERVER_URL + value.img}
				alt={`${value.firstName} ${value.secondName}`}
			/>
			<Card.Body>
				<Card.Title>
					<Heading as="h4" size="md">
						{value.firstName} {value.secondName}
					</Heading>
				</Card.Title>
				<Card.Text>
					<Heading as="h5" size="sm">
						{value.age} лет, {value.place}
					</Heading>

					<div>
						<span>Нужно пожертвовать: {value.totalSum}</span>
					</div>
					<div>
						<span>Осталось: {value.remainSum}</span>
					</div>
				</Card.Text>
			</Card.Body>
			<Button
				mt={4}
				colorScheme="teal"
				type="submit"
				className="w-50"
				onClick={() => navigate("/payment")}
			>
				Помочь
			</Button>
		</Card>
	);
};
