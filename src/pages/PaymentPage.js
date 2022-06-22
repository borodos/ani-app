import React, { useEffect, useState } from "react";

import {
	Box,
	Button,
	Checkbox,
	FormHelperText,
	Heading,
	HStack,
	Link,
	Select,
	useRadio,
	useRadioGroup,
	useToast,
} from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
} from "@chakra-ui/react";
import { Formik, Field, Form, useFormik } from "formik";
import { ButtonGroup, Card, Container, ToggleButton } from "react-bootstrap";
import { RadioCard } from "../components/RadioCard";
import "../css/PaymentPage.css";
import { getNeededs } from "../http/neededApi";
import { pay } from "../http/paymentApi";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
	const toast = useToast();
	const [neededs, setNeededs] = useState([]);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			sum: "",
			recipientInfo: "",
			senderEmail: "",
			senderInfo: "",
		},
		onSubmit: (values) => {
			pay(values).then((value) => {
				toast({
					title: "Оплата успешно пройдена",
					status: "success",
					isClosable: false,
					duration: 2000,
					position: "bottom-left",
				});
				setTimeout(() => {
					navigate("/");
				}, 1000);
			});
		},
	});

	const options = ["300", "600", "1000", "2500"];

	const { getRadioProps } = useRadioGroup({
		name: formik,
		defaultValue: "react",
		onChange: (value) => {
			formik.values.sum = value;
		},
	});

	useEffect(() => {
		getNeededs().then((data) => {
			setNeededs(data);
		});
	}, []);

	return (
		<Container className="d-flex justify-content-center align-items-center flex-grow-1 mt-5 mb-5 wrapper-payment-page">
			<Card className="card-payment">
				<Card.Body>
					<Heading as="h3" size="xl" color="blue.300">
						Online перевод
					</Heading>
					{/* <div className="d-flex justify-content-center m-4">
						<Button
							colorScheme="teal"
							variant="outline"
							size="lg"
							width="300px"
							isActive={true}
						>
							Ежемесячно
						</Button>
						<Button
							colorScheme="teal"
							variant="outline"
							size="lg"
							width="300px"
						>
							Разово
						</Button>
					</div> */}

					<div className="w-100 m-4 ms-0">
						<strong>
							Мы будем рады небольшой, но ежемесячной помощи - это позволит нам
							увереннее чувствовать себя и надёжнее строить планы нашей работы
						</strong>
					</div>

					<div className="size-payment mb-3">
						<span>Размер пожертвования</span>
					</div>

					<form className="mb-3" onSubmit={formik.handleSubmit}>
						<div className="d-flex w-100 justify-content-around mb-3">
							{options.map((value) => {
								const radio = getRadioProps({ value });
								return (
									<RadioCard key={value} {...radio}>
										{value}
									</RadioCard>
								);
							})}
						</div>

						<FormControl isRequired className="mt-2">
							<FormLabel htmlFor="sum">Другая сумма, &#8381;</FormLabel>
							<Input
								id="sum"
								type="number"
								placeholder="Введите сумму"
								onChange={formik.handleChange}
								value={formik.values.sum}
							/>
						</FormControl>

						<FormControl isRequired className="mt-2">
							<FormLabel htmlFor="recipientInfo">Выберите получателя</FormLabel>
							<Select
								id="recipientInfo"
								placeholder="Выберите получателя"
								onChange={formik.handleChange}
								value={formik.values.recipientInfo}
							>
								{neededs.map((value, index, array) => (
									<option
										key={`${value}-${index}`}
										value={`${value.firstName} ${value.secondName}`}
									>
										{value.firstName} {value.secondName}
									</option>
								))}
							</Select>
						</FormControl>

						<FormControl isRequired className="mt-2">
							<div className="data-info mb-2">
								<span>Ваши данные</span>
							</div>
							<FormLabel htmlFor="senderEmail">Ваш email</FormLabel>
							<Input
								id="senderEmail"
								type="email"
								placeholder="Введите email"
								onChange={formik.handleChange}
								value={formik.values.senderEmail}
							/>
						</FormControl>

						<FormControl isRequired className="mt-2">
							<FormLabel htmlFor="senderInfo">
								Ваше ФИО или организация
							</FormLabel>
							<Input
								id="senderInfo"
								placeholder="Введите ФИО или организацию"
								onChange={formik.handleChange}
								value={formik.values.senderInfo}
							/>
						</FormControl>

						<div className="d-flex flex-column">
							<Checkbox mt={4} mb={4} colorScheme="green" isRequired>
								Соглашаюсь с <Link color="blue.300">офертой</Link> и обработкой
								моих персональных данных
							</Checkbox>
							<Checkbox colorScheme="green">
								Я хочу получать новости от Фонда
							</Checkbox>
						</div>

						<Button mt={4} colorScheme="teal" type="submit">
							Отправить
						</Button>
					</form>
				</Card.Body>
			</Card>
		</Container>
	);
};
