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
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import "../css/Links.css";
import { login } from "../http/userApi";

export const AuthPage = () => {
	function validateEmail(value) {
		let error;

		const regex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		if (!value) {
			error = "Email is required";
		} else if (!regex.test(value)) {
			error = "Jeez! Your email is wrong...";
		}
		return error;
	}

	function validatePassword(value) {
		let error;
		if (!value) {
			error = "Password is required";
		}
		return error;
	}

	const { userStore } = useContext(Context); // -- Берем из контекста пользователя
	const navigate = useNavigate();
	const toast = useToast();

	return (
		<Container className="d-flex justify-content-center align-items-center flex-grow-1 mt-5 mb-5">
			<Card className="p-4 w-50">
				<Card.Title className="border-bottom p-2">Авторизация</Card.Title>
				<Formik
					initialValues={{ email: "", password: "" }}
					onSubmit={async (values, actions) => {
						try {
							let data = await login(values.email, values.password);
							userStore.setUser(data);
							userStore.setIsAuth(true);
							navigate("/");
							toast({
								title: "Вы успешно вошли",
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
								Нет аккаунта? &nbsp;
								<NavLink className="link" to="/registration">
									Зарегистрироваться
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
