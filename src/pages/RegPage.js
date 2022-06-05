import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
	useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import "../css/Links.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { registration } from "../http/userApi";

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

	const { userStore } = useContext(Context); // -- Берем из контекста пользователя
	const navigate = useNavigate();
	const toast = useToast();

	return (
		<Container className="d-flex justify-content-center align-items-center flex-grow-1 mt-5">
			<Card className="p-4 w-50">
				<Card.Title className="border-bottom p-2">Регистрация</Card.Title>
				<Formik
					initialValues={{
						email: "",
						password: "",
						firstName: "",
						secondName: "",
					}}
					onSubmit={async (values, actions) => {
						try {
							let data = await registration(
								values.email,
								values.password,
								values.firstName,
								values.secondName
							);
							userStore.setUser(data);
							userStore.setIsAuth(true);
							navigate("/");
							toast({
								title: "Вы успешно зарегистрировались.",
								status: "success",
								isClosable: false,
								duration: 2000,
								position: "bottom-left",
							});
						} catch (error) {
							alert(error.response.data.message);
						}
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
										<Input {...field} id="email" placeholder="Введите почту" />
										<FormErrorMessage>{form.errors.email}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Field name="firstName" validate={validateFirstName}>
								{({ field, form }) => (
									<FormControl
										className="mt-2"
										isInvalid={form.errors.firstName && form.touched.firstName}
									>
										<FormLabel htmlFor="firstName">Имя</FormLabel>
										<Input
											{...field}
											id="firstName"
											placeholder="Введите имя"
										/>
										<FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Field name="secondName" validate={validateLastName}>
								{({ field, form }) => (
									<FormControl
										className="mt-2"
										isInvalid={
											form.errors.secondName && form.touched.secondName
										}
									>
										<FormLabel htmlFor="secondName">Фамилия</FormLabel>
										<Input
											{...field}
											id="secondName"
											placeholder="Введите фамилию"
										/>
										<FormErrorMessage>
											{form.errors.secondName}
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
										<FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
	);
};
