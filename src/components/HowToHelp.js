import React from "react";
import { Button, Heading, Image, Text } from "@chakra-ui/react";
import "../css/HowToHelp.css";
import { useNavigate } from "react-router-dom";

export const HowToHelp = () => {
	const navigate = useNavigate();
	return (
		<div className="wrapper-how-to-help">
			<Heading as="h2" size="xl" className="mb-4" color="blue.300">
				Как помочь
			</Heading>
			<div className="wrapper-pay">
				<Heading as="h2" size="2xl" color="blue.300">
					Online перевод
				</Heading>
				<Text fontSize="xl" className="m-4 ms-0">
					Вы можете осуществить разовый платеж или подписать на регулярный при
					помощи:
				</Text>

				<div className="d-flex w-50 justify-content-between">
					<div className="d-flex flex-column align-items-center">
						<div className="img-pay"></div>
						<Text fontSize="sm" color="gray">
							Банковская карта
						</Text>
					</div>
					<div className="d-flex flex-column align-items-center">
						<div className="sber-pay"></div>
						<Text fontSize="sm" color="gray">
							Сбербанк Онлайн
						</Text>
					</div>
				</div>
				<Button mt={4} colorScheme="teal" onClick={() => navigate("/payment")}>
					Выбрать цель пожертвования
				</Button>
			</div>
		</div>
	);
};
