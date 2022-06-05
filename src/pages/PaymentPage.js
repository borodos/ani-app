import React, { useState } from "react";

import {
	Box,
	Button,
	FormHelperText,
	Heading,
	HStack,
	Select,
	useRadio,
	useRadioGroup,
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

export const PaymentPage = () => {
	let error = false;
	const validateEmail = (value) => {
		const regex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		if (!regex.test(value)) {
			error = true;
		}
	};

	const formik = useFormik({
		initialValues: {
			sum: "",
			recipient: "",
			senderEmail: "",
			senderInfo: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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

	return (
		<Container className="d-flex justify-content-center align-items-center flex-grow-1 wrapper-payment-page">
			<Card className="card-payment">
				<Card.Body>
					<Heading as="h3" size="xl" color="blue.300">
						Online перевод
					</Heading>
					<div className="d-flex justify-content-center m-4">
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
					</div>

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
								placeholder="Введите сумму"
								onChange={formik.handleChange}
								value={formik.values.sum}
							/>
						</FormControl>

						<FormControl isRequired className="mt-2">
							<FormLabel htmlFor="recipient">Выберите получателя</FormLabel>
							<Select
								id="recipient"
								placeholder="Выберите получателя"
								onChange={formik.handleChange}
								value={formik.values.recipient}
							>
								<option value="Василиса Соколова">Василиса Соколова</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
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

						<Button mt={4} colorScheme="teal" type="submit">
							Отправить
						</Button>
					</form>
				</Card.Body>
			</Card>
		</Container>
	);
};
