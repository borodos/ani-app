import React from "react";
import { Card, Container } from "react-bootstrap";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import "../css/Links.css";
import { NavLink } from "react-router-dom";

export const RegPage = () => {
	function validateEmail(value) {
		let error;

		const regex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		if (!value) {
			error = "Введите почту!";
		} else if (!regex.test(value)) {
			error = "Неккоректный email.";
		}
		return error;
	}

	function validatePassword(value) {
		let error;
		if (!value) {
			error = "Введите пароль!";
		}
		return error;
	}

	function validateFirstName(value) {
		let error;
		if (!value) {
			error = "Введите имя!";
		}
		return error;
	}

	function validateLastName(value) {
		let error;
		if (!value) {
			error = "Введите фамилию!";
		}
		return error;
	}

	return (
		<div>
			<Container className="d-flex justify-content-center align-items-center flex-grow-1 mt-5">
				<Card className="p-4 w-50">
					<Card.Title className="border-bottom p-2">Регистрация</Card.Title>
					<Formik
						initialValues={{
							email: "",
							password: "",
							firstName: "",
							lastName: "",
						}}
						onSubmit={(values, actions) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								actions.setSubmitting(false);
							}, 1000);
						}}
					>
						{(props) => (
							<Form>
								<Field name="email" validate={validateEmail}>
									{({ field, form }) => (
										<FormControl
											className="mt-2"
											isInvalid={form.errors.email && form.touched.email}
										>
											<FormLabel htmlFor="email">Email</FormLabel>
											<Input
												{...field}
												id="email"
												placeholder="Введите почту"
											/>
											<FormErrorMessage>{form.errors.email}</FormErrorMessage>
										</FormControl>
									)}
								</Field>

								<Field name="firstName" validate={validateFirstName}>
									{({ field, form }) => (
										<FormControl
											className="mt-2"
											isInvalid={
												form.errors.firstName && form.touched.firstName
											}
										>
											<FormLabel htmlFor="firstName">Имя</FormLabel>
											<Input
												{...field}
												id="firstName"
												placeholder="Введите имя"
											/>
											<FormErrorMessage>
												{form.errors.firstName}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>

								<Field name="lastName" validate={validateLastName}>
									{({ field, form }) => (
										<FormControl
											className="mt-2"
											isInvalid={form.errors.lastName && form.touched.lastName}
										>
											<FormLabel htmlFor="lastName">Фамилия</FormLabel>
											<Input
												{...field}
												id="lastName"
												placeholder="Введите фамилию"
											/>
											<FormErrorMessage>
												{form.errors.lastName}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>

								<Field name="password" validate={validatePassword}>
									{({ field, form }) => (
										<FormControl
											className="mt-2"
											isInvalid={form.errors.password && form.touched.password}
										>
											<FormLabel htmlFor="password">Пароль</FormLabel>
											<Input
												{...field}
												type="password"
												id="password"
												placeholder="Введите пароль"
											/>
											<FormErrorMessage>
												{form.errors.password}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<div className="mt-3">
									Есть аккаунт? &nbsp;
									<NavLink className="link" to="/login">
										Авторизоваться
									</NavLink>
								</div>
								<Button
									mt={4}
									colorScheme="teal"
									isLoading={props.isSubmitting}
									type="submit"
								>
									Отправить
								</Button>
							</Form>
						)}
					</Formik>
				</Card>
			</Container>
		</div>
	);
};
