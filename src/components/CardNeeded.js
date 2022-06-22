import { Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CardNeeded = ({ value }) => {
	const navigate = useNavigate();
	return (
		<div className="w-50">
			<Card className="card-person">
				<Image
					className="img-person"
					borderRadius="full"
					objectFit="cover"
					boxSize="150px"
					src={process.env.REACT_APP_SERVER_URL + value.img}
					alt={`${value.firstName} ${value.secondName}`}
				/>
				<Card.Body>
					<Card.Title>
						<Heading as="h4" size="md">
							{value.firstName} {value.secondName}
						</Heading>
					</Card.Title>
					<Heading as="h5" size="sm" mb={3}>
						{value.age} лет, {value.place}
					</Heading>
					<div className="needed-info mt-3 mb-3">
						<Text as="i" fontSize="sm">
							{value.info}
						</Text>
					</div>
					<div>
						<span>Нужно пожертвовать: {value.totalSum}</span>
					</div>
					<div>
						<span>Осталось: {value.remainSum}</span>
					</div>
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
		</div>
	);
};
